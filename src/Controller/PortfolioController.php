<?php

namespace App\Controller;

use App\Entity\Message;
use App\Events\MessageSentEvent;
use App\Form\MessageType;

use App\Services\Fetch;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class PortfolioController extends AbstractController
{

    /**
     * @Route("/", name="home")
     * Method({"GET", "POST"})
     * @param Request $request
     * @param EventDispatcherInterface $dispatcher
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function getIndex(Request $request, EventDispatcherInterface $dispatcher) {
        $message = new Message();$form = $this->createForm(MessageType::class, $message);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {$message = $form->getData();
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($message);
        $entityManager->flush();

        $event = new MessageSentEvent($message);
        $dispatcher->dispatch(MessageSentEvent::NAME, $event);

        }
        return $this->render('portfolio/index.html.twig', array('form' => $form->createView()));}

    /**
     * @Route("/administrator", name="administrator")
     */

    public function getAdministrator(Fetch $fetch) {

        return $this->render('portfolio/administrator.html.twig', array(
            'messages' => $fetch->getMessages(Message::class)));
    }

    /**
     * @Route("/signup", name="signup")
     */

    public function signUp()
    {
        return $this->render('register/index.html.rwig', [
            'controller_name' => 'PortfolioController',
        ]);
    }

    /**
     * @Route("/logout", name="logout")
     */
    public function logout()
    {

    }



}
