<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class LoginController extends AbstractController
{
    /**
     * @Route("/signin", name="signin")
     */
    public function getLogin()
    {

      return $this->render('login/login.html.twig', [
           'controller_name' => 'LoginController',
        ]);
    }

    /**
     * @Route("/login", name="login")
     * @param Request $request
     * @param AuthenticationUtils $authenticationUtils
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function loginAction(Request $request, AuthenticationUtils $authenticationUtils)
    {
    //$errors = $authenticationUtils->getLastAuthenticationError();

    $lastUserName = $authenticationUtils->getLastUsername();

    return $this->render('App:Login:login.html.twig', array(
      //  'errors' => $errors,
        'username' => $lastUserName
    ));
    }

    /**
     * @Route("/logout", name="logout")
     */

    public function logoutAction () {

    }

    /**
     * @Route("/signup", name="signup")
     * @param Request $request
     * @param UserPasswordEncoderInterface $encoder
     * @return \Symfony\Component\HttpFoundation\Response
     */

    public function getSignup (Request $request,
                               UserPasswordEncoderInterface $encoder) {

        $user = new User();

        $form = $this->createForm(UserType::class, $user);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $user->setPassword($encoder->encodePassword($user, $user->getPassword()));

            $entityManager = $this->getDoctrine()->getManager();

            $entityManager->persist($user);
            $entityManager->flush();

            return $this->redirectToRoute('administrator');
        }

        return $this->render('login/signup.html.twig', array(
            'form' => $form->createView()
        ));
    }
}
