<?php

namespace App\Repository;

use App\Entity\CV;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method CV|null find($id, $lockMode = null, $lockVersion = null)
 * @method CV|null findOneBy(array $criteria, array $orderBy = null)
 * @method CV[]    findAll()
 * @method CV[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CVRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, CV::class);
    }


    public function findAllCVs()
    {
        $queryBuilder = $this->createQueryBuilder('cv');
        return $queryBuilder->select('cv')->where('cv.active = true' )
                ->orderBy('cv.id' ,'DESC')
                ->getQuery()
                ->getResult();
    }

    public function findMyCVs($userCVs)
    {
        $queryBuilder = $this->createQueryBuilder('cv');
        return $queryBuilder->select('cv')->where('cv.user = :user')
            ->setParameter('user', $userCVs)
            ->orderBy('cv.id' ,'DESC')
            ->getQuery()
            ->getResult();
    }

    public function findUserCVs($id)
    {
        $queryBuilder = $this->createQueryBuilder('cv');
        return $queryBuilder->select('cv')->where('cv.user = :id')
            ->setParameter('id', $id)
            ->andWhere('cv.active = true')
            ->orderBy('cv.id' ,'DESC')
            ->getQuery()
            ->getResult();
    }


    // /**
    //  * @return CV[] Returns an array of CV objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?CV
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
