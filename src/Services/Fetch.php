<?php

namespace App\Services;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class Fetch extends AbstractController
{
    public function getMessages($entity)
    {
      return $this->getDoctrine()->getRepository($entity)->findAll();
    }
}