<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190413104142 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE cv (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(100) NOT NULL, email VARCHAR(100) NOT NULL, address VARCHAR(100) DEFAULT NULL, phone_number VARCHAR(100) DEFAULT NULL, about VARCHAR(240) NOT NULL, job_start1 INT NOT NULL, job_start2 INT NOT NULL, job_start3 INT NOT NULL, job_end1 INT NOT NULL, job_end2 INT NOT NULL, job_end3 INT NOT NULL, job_title1 VARCHAR(100) NOT NULL, job_title2 VARCHAR(100) NOT NULL, job_title3 VARCHAR(100) NOT NULL, job_description1 VARCHAR(240) NOT NULL, job_description2 VARCHAR(240) NOT NULL, job_description3 VARCHAR(240) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE cv');
    }
}
