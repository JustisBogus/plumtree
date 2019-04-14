<?php

namespace App\Events;

use App\Entity\Message;
use Symfony\Component\EventDispatcher\Event;

class MessageSentEvent extends Event
{
    /**
     * @var Message $_message
     */
    private $message;

    const NAME = "message.sent";

    public function __construct(Message $message)
    {
        $this->message = $message;
    }

    public function getMessage()
    {
        return $this->message;
    }

}