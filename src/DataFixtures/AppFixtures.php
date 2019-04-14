<?php

namespace App\DataFixtures;

use App\Entity\CV;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{

    /**
     * @var UserPasswordEncoderInterface
     */
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }


    public function load(ObjectManager $manager)
    {
        $this->loadUsers($manager);
        $this->loadCVs($manager);
    }

    private function loadCVs(ObjectManager $manager) {

        for ($i = 0; $i < 10; $i++) {
            $cv = new CV();
            $cv->setName('some random name' . rand(0,100));
            $cv->setJobTitle1('some random job title' . rand(0,100));
            $cv->setAbout('some random about' . rand(0,100));
            $cv->setSkills('some random skills' . rand(0,100));
            $cv->setEmail('some random email' . rand(0,100));
            $cv->setEducation('some random education' . rand(0,100));
            $cv->setUser($this->getReference('justis'));
            $manager->persist($cv);
        }

        $manager->flush();
    }

    private function loadUsers(ObjectManager $manager)
    {

            $user = new User();
            $user->setUsername('justis');
            $user->setFullName('Justis Bogus');
            $user->setEmail('ikick@mail.com');
            $user->setPassword($this->passwordEncoder->encodePassword($user, 'login1'));
            $user->setRoles([User::ROLE_ADMIN]);

            $this->addReference('justis', $user);

            $manager->persist($user);
            $manager->flush();
    }

}
