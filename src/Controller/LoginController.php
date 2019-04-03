<?php

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class LoginController extends AbstractController
{
    /**
     * @Route("/signin", name="signin")
     */
    public function getLogin()
    {

      return $this->render('/login/login.html.twig', [
           'controller_name' => 'LoginController',
        ]);
    }

    /**
     * @Route("/login", name="login")
     */
    public function loginAction(Request $request, AuthenticationUtils $authenticationUtils)
    {
    $errors = $authenticationUtils->getLastAuthenticationError();

    $lastUserName = $authenticationUtils->getLastUsername();

    return $this->render('AppBundle:Login:login.html.twig', array(
       'errors' => $errors,
        'username' => $lastUserName
    ));
    }

    /**
     * @Route("/logout", name="logout")
     */

    public function logoutAction () {

    }

}
