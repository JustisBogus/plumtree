<?php

namespace App\Events;

use App\Entity\CV;
use Symfony\Component\EventDispatcher\Event;

class cvCreatedEvent extends Event
{
    /**
     * @var CV $cv
     */
    private $cv;

    const NAME = "cv.created";

    public function __construct(CV $cv)
    {
        $this->cv = $cv;
    }

    public function getCV()
    {
        return $this->cv;
    }

}