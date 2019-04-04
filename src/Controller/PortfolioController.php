<?php

namespace App\Controller;

use App\Entity\Message;
use App\Form\MessageType;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class PortfolioController extends AbstractController
{

    /**
     * @Route("/", name="home")
     * Method({"GET", "POST"})
     * @param Request $request
     */
    public function getIndex(Request $request) {

        $message = new Message();

        $form = $this->createForm(MessageType::class, $message);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $message = $form->getData();

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($message);
            $entityManager->flush();

            return $this->redirectToRoute('home');
        }

        return $this->render('portfolio/index.html.twig', array(
            'form' => $form->createView()
        ));
    }


    /**
     * @Route("/administrator", name="administrator")
     */

    public function getAdministrator() {

        $messages = $this->getDoctrine()->getRepository(Message::class)->findAll();

        return $this->render('portfolio/administrator.html.twig', array('messages' => $messages));
    }

    /**
     * @Route("/save")
     */
    public function save() {
        $entityManager = $this->getDoctrine()->getManager();

        $message = new Message();
        $message->setEmail('Message 1');
        $message->setName('Name 1');
        $message->setPhoneNumber('Phone Number 1');
        $message->setMessage('Message 1');

        $entityManager->persist($message);

        $entityManager->flush();

        return new Response('Saved message'.$message->getId());
    }

    /**
     * @Route("/message/{id}",name="show_message")
     */
    public function show($id) {
        $message = $this->getDoctrine()->getRepository(Message::class)->find($id);

        return $this->render('portfolio/message.html.twig', array('message' => $message));
    }



}

