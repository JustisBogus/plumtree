<?php

namespace App\Controller;

use App\Entity\Message;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

use Symphony\Component\Form\Extension\Core\Type\TextType;
use Symphony\Component\Form\Extension\Core\Type\TextareaType;
use Symphony\Component\Form\Extension\Core\Type\SubmitType;

class PortfolioController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function indexAction()
    {
        return $this->render('portfolio/index.html.twig');
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

