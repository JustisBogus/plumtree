<?php

namespace App\Events;

use App\Entity\Message;
use Symfony\Component\EventDispatcher\Event;

class MessageSentEvent extends Event
{
    /**
     * @var Message $_message
     */
    private $_message;

    const NAME = "message.sent";

    public function __construct(Message $message)
    {
        $this-> _message = $message;
    }

    public function getMessage()
    {
        return $this->_message;
    }

}