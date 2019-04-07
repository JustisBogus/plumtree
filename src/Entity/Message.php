<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\MessageRepository")
 */
class Message
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text", length=100)
     */
    private $email;

    /**
     * @ORM\Column(type="text", length=25)
     */
    private $name;

    /**
     * @ORM\Column(type="text", length=25, nullable=true)
     */
    private $phoneNumber;
    /**
     * @var string
     *
     * @ORM\Column(type="text", length=1000)
     */
    private $message;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail() {
        return $this->email;
    }

    public function setEmail($email) {
        $this->email = $email;
    }

    public function getName() {
        return $this->name;
    }

    public function setName($name) {
        $this->name = $name;
    }

    public function getPhoneNumber() {
        return $this->phoneNumber;
    }

    public function setPhoneNumber($phoneNumber) {
        $this->phoneNumber = $phoneNumber;
    }

    public function getMessage() {
        return $this->message;
    }

    public function setMessage($message) {
        $this->message = $message;
    }
}
