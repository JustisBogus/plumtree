<?php

namespace App\Events;

use App\Events\UserRegisterEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class UserRegisterSubscriber implements EventSubscriberInterface
{
    /**
     * @var \Swift_Mailer
     */
    private $mailer;

    public function __construct(\Swift_Mailer $mailer)
    {
        $this->mailer = $mailer;
    }


    public static function getSubscribedEvents()
    {
        return [
            UserRegisterEvent::NAME => 'onUserRegister'
        ];
    }

    public function onUserRegister(UserRegisterEvent $event)
    {
        $message = (new \Swift_Message())
            ->setSubject('You have successfully registered at CV!')
            ->setFrom('mail@cv.com')
            ->setTo($event->getRegisteredUser()->getEmail())
            ->setBody('Welcome!', 'text/html');

        $this->mailer->send($message);
    }
}