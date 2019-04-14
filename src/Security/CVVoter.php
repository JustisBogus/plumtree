<?php


namespace App\Security;


use App\Entity\CV;
use App\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\AccessDecisionManagerInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;

class CVVoter extends Voter
{
    const EDIT = 'edit';
    const DELETE = 'delete';

    /**
     * @var AccessDecisionManagerInterface
     */
    private $decisionManager;

    public function __construct(AccessDecisionManagerInterface $decisionManager)
    {
        $this->decisionManager = $decisionManager;
    }

    protected function supports($attribute, $subject)
    {
       if (!in_array($attribute, [self::EDIT, self::DELETE])) {
           return false;
       }

       if (!$subject instanceof CV) {
           return false;
       }

       return true;
    }

    protected function voteOnAttribute($attribute, $subject, TokenInterface $token)
    {
        if ($this->decisionManager->decide($token, [User::ROLE_ADMIN])) {
            return true;
        }

        $authenticatedUser = $token->getUser();

        if(!$authenticatedUser instanceof User) {
            return false;
        }

        /**
         * @var CV $cv
         */
        $cv = $subject;

        return $cv->getUser()->getId() === $authenticatedUser->getId();

    }
}