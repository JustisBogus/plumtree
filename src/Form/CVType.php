<?php


namespace App\Form;


use App\Entity\CV;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\IsTrue;

class CVType extends AbstractType
{
   public function buildForm(FormBuilderInterface $builder, array $options)
   {
       $builder->add('name', TextType::class, [
           'attr' => [
               'placeholder' => 'Your Name'
           ]
       ])
           ->add('email', EmailType::class, [
               'attr' => [
                   'placeholder' => 'Your Email'
               ]
           ])
           ->add('address', TextType::class, [
               'attr' => [
                   'placeholder' => 'Your Address'
               ]
           ])
           ->add('phoneNumber', TextType::class, [
               'required' => false,
               'attr' => [
                   'placeholder' => 'Your Phone Number'
               ]
           ])
           ->add('about', TextareaType::class, [
               'attr' => [
                   'placeholder' => 'Write a few sentences about yourself'
               ]
           ])
           ->add('jobStart1', IntegerType::class, [
               'required' => false,
               'attr' => [
                   'placeholder' => 'Year'
               ]
           ])
           ->add('jobEnd1', IntegerType::class, [
               'required' => false,
               'attr' => [
                   'placeholder' => 'Year'
               ]
           ])
           ->add('jobTitle1', TextType::class, [
               'required' => false,
               'attr' => [
                   'placeholder' => 'Job Title'
               ]
           ])
           ->add('jobDescription1', TextareaType::class, [
               'required' => false,
               'attr' => [
                   'placeholder' => 'Write a few sentences about the job'
               ]
           ])
           ->add('jobStart2', IntegerType::class, [
               'required' => false,
               'attr' => [
                   'placeholder' => 'Year'
               ]
           ])
           ->add('jobEnd2', IntegerType::class, [
               'required' => false,
               'attr' => [
                   'placeholder' => 'Year'
               ]
           ])
           ->add('jobTitle2', TextType::class, [
               'required' => false,
               'attr' => [
                   'placeholder' => 'Job Title'
               ]
           ])
           ->add('jobDescription2', TextareaType::class, [
               'required' => false,
               'attr' => [
                   'placeholder' => 'Write a few sentences about the job'
               ]
           ])
           ->add('jobStart3', IntegerType::class, [
               'required' => false,
               'attr' => [
                   'placeholder' => 'Year'
               ]
           ])
           ->add('jobEnd3', IntegerType::class, [
               'required' => false,
               'attr' => [
                   'placeholder' => 'Year'
               ]
           ])
           ->add('jobTitle3', TextType::class, [
               'required' => false,
               'attr' => [
                   'placeholder' => 'Job Title'
               ]
           ])
           ->add('jobDescription3', TextareaType::class, [
               'required' => false,
               'attr' => [
                   'placeholder' => 'Write a few sentences about the job'
               ]
           ])
           ->add('education', TextareaType::class, [
               'attr' => [
                   'placeholder' => 'Write a few sentences about your education'
               ]
           ])
           ->add('skills', TextareaType::class, [
               'attr' => [
                   'placeholder' => 'Write a few sentences about your skills'
               ]
           ])
           ->add('active', CheckboxType::class, [
                       'label' => 'make this CV visible',
                        'required' => false])
           ->add('save', SubmitType::class);


   }

   public function configureOptions(OptionsResolver $resolver)
   {
       $resolver->setDefaults([
           'data_class' => CV::class
       ]);
   }
}