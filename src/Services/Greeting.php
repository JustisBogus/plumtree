<?php

namespace App\Services;

use Psr\Log\LoggerInterface;

class Greeting
{
    /**
     * Greeting constructor.
     * @var LoggerInterface
     */
    private $logger;

    public function __construct(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }

    public function greet(string $name): string
    {

        $this->logger->info("Greeted $name");
        return "Hello $name";
    }
}