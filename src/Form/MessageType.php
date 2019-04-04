<?php

namespace App\Form;

use App\Entity\Message;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MessageType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {

        $builder
            ->add('name', TextType::class)
            ->add('email', EmailType::class)
            ->add('phoneNumber', TextType::class, array(
                'required' => false
               ))
            ->add('message', TextareaType::class)
            ->add('Send', SubmitType::class, [
                'label' => 'Send',
                'attr' => [
                    'class' => 'submitButton'
                ]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {

        $resolver->setDefaults([
            'data_class' => Message::class
        ]);

    }
}