<?php

namespace App\Controller;

use App\Entity\CV;
use App\Entity\Message;
use App\Entity\User;
use App\Events\cvCreatedEvent;
use App\Form\CVType;
use App\Form\MessageType;

use App\Repository\CVRepository;
use App\Repository\UserRepository;
use App\Services\Fetch;
use Knp\Component\Pager\PaginatorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;

/**
 * @property SessionInterface session
 */
class PortfolioController extends AbstractController
{

    /**
     * @var SessionInterface
     */
    private $session;

    /**
     * @var RouterInterface
     */
    private $router;

    /**
     * @var FlashBagInterface
     */
    private $flashBag;

    /**
     * @var $authorizationChecker
     */
    private $authorizationChecker;

    /**
     * @var $CVRepository
     */
    private $cvRepository;

    /**
     * @var $UserRepository
     */
    private $userRepository;


    /**
     * PortfolioController constructor.
     * @param SessionInterface $session
     * @param RouterInterface $router
     * @param FlashBagInterface $flashBag
     * @param AuthorizationCheckerInterface $authorizationChecker
     * @param CVRepository $cvRepository
     * @param UserRepository $userRepository
     */


    public function __construct(SessionInterface $session,
                                RouterInterface $router,
                                FlashBagInterface $flashBag,
                                AuthorizationCheckerInterface $authorizationChecker,
                                CVRepository $cvRepository,
                                UserRepository $userRepository)
    {

        $this->session = $session;
        $this->router = $router;
        $this->flashBag = $flashBag;
        $this->authorizationChecker = $authorizationChecker;
        $this->cvRepository = $cvRepository;
        $this->userRepository = $userRepository;
    }

    /**
     * @Route("/", name="home")
     * @param Request $request
     * @param PaginatorInterface $paginator
     * @return Response
     */
    public function actionIndex(Request $request, PaginatorInterface $paginator)
    {

        $cvsQuery = $this->cvRepository->findAllCVs();

        $cvs = $paginator->paginate($cvsQuery, $request->query->getInt('page', 1), 5);

        //$cvs = $this->getDoctrine()->getRepository(CV::class)->findBy([],['id' => 'DESC']);

        return $this->render('cv/index.html.twig',
            [
                'cvs' => $cvs
            ]);
    }

    /**
     * @Route("/edit/{id}", name="edit_cv")
     * @param $id
     * @param Request $request
     * @param TokenStorageInterface $tokenStorage
     * @return RedirectResponse|Response
     */

    public function editCV($id, Request $request, TokenStorageInterface $tokenStorage )
    {
        $user = $tokenStorage->getToken()->getUser();
        $cv = $this->getDoctrine()->getRepository(CV::class)->find($id);

        if (!$this->authorizationChecker->isGranted('edit', $cv)) {
            throw new UnauthorizedHttpException("Access denied");
        }

        $form = $this->createForm(CVType::class, $cv);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())  {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($cv);
            $entityManager->flush();

            return new RedirectResponse($this->router->generate('home'));
        }

        return $this->render('cv/createCV.html.twig', [
            'form' => $form->createView(),
            'user' => $user
        ]);
    }

    /**
     * @Route("/add", name="add_cv")
     * @Security("is_granted('ROLE_USER')")
     * @param Request $request
     * @param TokenStorageInterface $tokenStorage
     * @param EventDispatcherInterface $dispatcher
     * @return Response
     */

    public function addCV(Request $request,
                          TokenStorageInterface $tokenStorage,
                          EventDispatcherInterface $dispatcher)
    {
        $user = $tokenStorage->getToken()->getUser();
        $cv = new CV();
        $cv->setUser($user);
        $fullName = $user->getFullName();
        $cv->setName($fullName);
        $form = $this->createForm(CVType::class, $cv);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())  {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($cv);
            $entityManager->flush();

            $event = new cvCreatedEvent($cv);
            $dispatcher->dispatch(cvCreatedEvent::NAME, $event);

            return new RedirectResponse($this->router->generate('home'));
        }

        return $this->render('cv/createCV.html.twig', [
            'form' => $form->createView(),
            'user' => $user
        ]);
    }


    /**
     * @Route("/administrator", name="administrator")
     * @param Request $request
     * @param Fetch $fetch
     * @param TokenStorageInterface $tokenStorage
     * @param PaginatorInterface $paginator
     * @return Response
     */

    public function getAdministrator(Request $request, Fetch $fetch,
                                     TokenStorageInterface $tokenStorage,
                                     PaginatorInterface $paginator) {

        $user = $tokenStorage->getToken()->getUser();

        $usersQuery = $this->userRepository->findAllUsersExceptAdmin($user);

        $users = $paginator->paginate($usersQuery, $request->query->getInt('page', 1), 5);

        return $this->render('portfolio/administrator.html.twig', [
            'users' => $users
        ]);
    }

    /**
     * @Route("/logout", name="logout")
     */

    public function logout()
    {

    }

    /**
     * @Route ("view/{id}", name="view_cv")
     */

    public function viewCV($id)
    {
        $cv = $this->getDoctrine()->getRepository(CV::class)->find($id);

        return $this->render('cv/cv.html.twig', [
            'cv' => $cv
        ]);
    }


    /**
     * @Route("/user/{username}", name="cv_user")
     * @param User $userCVs
     * @return Response
     */

    public function userCVS(User $userCVs)
    {

        $cvs = $this->cvRepository->findUserCVs($userCVs);

        return $this->render('cv/index.html.twig',
            [
                'cvs' => $cvs
            ]);
    }

    /**
     * @Route("/delete/{id}", name="delete_cv")
     * @param CV $cv
     * @return RedirectResponse
     * @Security("is_granted('delete', cv)", message="Access denied")
     */

    public function delete(CV $cv) {
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($cv);
        $entityManager->flush();

        $this->flashBag->add('notice', 'CV was deleted');

        return new RedirectResponse($this->router->generate('home'));
    }

    /**
     * @Route("/portfolio", name="portfolio")
     * @param Request $request
     * @return Response
     */

    public function portfolio(Request $request) {

        $message = new Message();
        $form = $this->createForm(MessageType::class, $message);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid())
        {
            $message = $form->getData();
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($message);
            $entityManager->flush();

        }
        return $this->render('portfolio/index.html.twig', array('form' => $form->createView()));
    }

    /**
     * @Route("/profile", name="profile")
     * @param TokenStorageInterface $tokenStorage
     * @return Response
     * @Security("is_granted('ROLE_USER')")
     */

    public function profile(TokenStorageInterface $tokenStorage) {

        $user = $tokenStorage->getToken()->getUser();

        $cvs = $this->cvRepository->findMyCVs($user);

        return $this->render('cv/profile.html.twig',
            [
                'cvs' => $cvs,
                'user' => $user
            ]);
    }


}
