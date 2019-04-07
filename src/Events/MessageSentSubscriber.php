<?php

namespace App\Events;

use Swift_Mailer;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class MessageSentSubscriber implements EventSubscriberInterface
{

    /**
     * @var \Swift_Mailer $_mailer
     */
    private $_mailer;


    public function __construct(\Swift_Mailer $mailer)
    {
        $this->_mailer = $mailer;
    }


    public static function getSubscribedEvents()
    {
        return [
            MessageSentEvent::NAME => 'onMessageSent'
        ];
    }

    public function onMessageSent(MessageSentEvent $event)
    {

        $message = $event->getMessage();

        $portfolioMessage = (new \Swift_Message($message->getName() . ' has sent you a message on your portfolio'))
            ->setFrom($message->getEmail())
            ->setTo('windsletterbox@yahoo.com')
            ->setBody($message->getMessage());

        return $this->_mailer->send($portfolioMessage);


    }
}