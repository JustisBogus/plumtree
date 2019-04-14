<?php

namespace App\Events;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class cvCreatedSubscriber implements EventSubscriberInterface
{

    /**
     * @var \Swift_Mailer $_mailer
     */
    private $mailer;


    public function __construct(\Swift_Mailer $mailer)
    {
        $this->mailer = $mailer;
    }


    public static function getSubscribedEvents()
    {
        return [
            cvCreatedEvent::NAME => 'onCVCreated'
        ];
    }

    public function onCVCreated(cvCreatedEvent $event)
    {

        $cv = $event->getCV();

        $cvMessage = (new \Swift_Message('Congratulations'))
            ->setFrom($cv->getEmail())
            ->setTo('windsletterbox@yahoo.com')
            ->setBody('You have created a new CV');

        return $this->mailer->send($cvMessage);
    }
}