<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CVRepository")
 */
class CV
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $address;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $phoneNumber;

    /**
     * @ORM\Column(type="string", length=240)
     * @Assert\NotBlank()
     * @Assert\Length(min=10, minMessage="Please write a little bit more about yourself")
     */
    private $about;

    /**
     * @ORM\Column(type="integer", length=25, nullable=true)
     */
    private $jobStart1;

    /**
     * @ORM\Column(type="integer", length=25, nullable=true)
     */
    private $jobStart2;

    /**
     * @ORM\Column(type="integer", length=25, nullable=true)
     */
    private $jobStart3;

    /**
     * @ORM\Column(type="integer", length=25, nullable=true)
     */
    private $jobEnd1;

    /**
     * @ORM\Column(type="integer", length=25, nullable=true)
     */
    private $jobEnd2;

    /**
     * @ORM\Column(type="integer", length=25, nullable=true)
     */
    private $jobEnd3;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $jobTitle1;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $jobTitle2;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $jobTitle3;

    /**
     * @ORM\Column(type="string", length=240, nullable=true)
     */
    private $jobDescription1;

    /**
     * @ORM\Column(type="string", length=240, nullable=true)
     */
    private $jobDescription2;

    /**
     * @ORM\Column(type="string", length=240, nullable=true)
     */
    private $jobDescription3;

    /**
     * @ORM\Column(type="string", length=240)
     */
    private $education;

    /**
     * @ORM\Column(type="string", length=240)
     */
    private $skills;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="cvs")
     * ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\Column(type="boolean")
     */
    private $active;



    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName() {
        return $this->name;
    }

    public function setName($name) {
        $this->name = $name;
    }

    public function getEmail() {
    return $this->email;
}

    public function setEmail($email) {
        $this->email = $email;
    }

    public function getAddress() {
        return $this->address;
    }

    public function setAddress($address) {
        $this->address = $address;
    }

    public function getPhoneNumber() {
        return $this->phoneNumber;
    }

    public function setPhoneNumber($phoneNumber) {
        $this->phoneNumber = $phoneNumber;
    }

    public function getAbout() {
        return $this->about;
    }

    public function setAbout($about) {
        $this->about = $about;
    }

    public function getJobStart1() {
        return $this->jobStart1;
    }

    public function setJobStart1($jobStart1) {
        $this->jobStart1 = $jobStart1;
    }

    public function getJobStart2() {
        return $this->jobStart2;
    }

    public function setJobStart2($jobStart2) {
        $this->jobStart2 = $jobStart2;
    }

    public function getJobStart3() {
        return $this->jobStart3;
    }

    public function setJobStart3($jobStart3) {
        $this->jobStart3 = $jobStart3;
    }

    public function getJobEnd1() {
        return $this->jobEnd1;
    }

    public function setJobEnd1($jobEnd1) {
        $this->jobEnd1 = $jobEnd1;
    }

    public function getJobEnd2() {
    return $this->jobEnd2;
}

    public function setJobEnd2($jobEnd2) {
        $this->jobEnd2 = $jobEnd2;
    }

    public function getJobEnd3() {
        return $this->jobEnd3;
    }

    public function setJobEnd3($jobEnd3) {
        $this->jobEnd3 = $jobEnd3;
    }

    public function getJobTitle1() {
        return $this->jobTitle1;
    }

    public function setJobTitle1($jobTitle1) {
        $this->jobTitle1 = $jobTitle1;
    }

    public function getJobTitle2() {
        return $this->jobTitle2;
    }

    public function setJobTitle2($jobTitle2) {
        $this->jobTitle2 = $jobTitle2;
    }

    public function getJobTitle3() {
        return $this->jobTitle1;
    }

    public function setJobTitle3($jobTitle3) {
        $this->jobTitle3 = $jobTitle3;
    }

    public function getJobDescription1() {
        return $this->jobDescription1;
    }

    public function setJobDescription1($jobDescription1) {
        $this->jobDescription1 = $jobDescription1;
    }

    public function getJobDescription2() {
        return $this->jobDescription2;
    }

    public function setJobDescription2($jobDescription2)
    {
        $this->jobDescription2 = $jobDescription2;
    }

    public function getJobDescription3() {
        return $this->jobDescription3;
    }

    public function setJobDescription3($jobDescription3)
    {
        $this->jobDescription3 = $jobDescription3;
    }

    public function getEducation() {
        return $this->education;
    }

    public function setEducation($education)
    {
        $this->education = $education;
    }

    public function getSkills() {
        return $this->education;
    }

    public function setSkills($skills)
    {
        $this->skills = $skills;
    }

    public function getUser() {
        return $this->user;
    }

    public function setUser($user)
    {
        $this->user = $user;
    }

    public function getActive() {
        return $this->active;
    }

    public function setActive($active)
    {
        $this->active = $active;
    }
}
