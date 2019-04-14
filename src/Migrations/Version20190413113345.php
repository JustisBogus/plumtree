<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190413113345 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE cv CHANGE job_start1 job_start1 INT DEFAULT NULL, CHANGE job_start2 job_start2 INT DEFAULT NULL, CHANGE job_start3 job_start3 INT DEFAULT NULL, CHANGE job_end1 job_end1 INT DEFAULT NULL, CHANGE job_end2 job_end2 INT DEFAULT NULL, CHANGE job_end3 job_end3 INT DEFAULT NULL, CHANGE job_title1 job_title1 VARCHAR(100) DEFAULT NULL, CHANGE job_title2 job_title2 VARCHAR(100) DEFAULT NULL, CHANGE job_title3 job_title3 VARCHAR(100) DEFAULT NULL, CHANGE job_description1 job_description1 VARCHAR(240) DEFAULT NULL, CHANGE job_description2 job_description2 VARCHAR(240) DEFAULT NULL, CHANGE job_description3 job_description3 VARCHAR(240) DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE cv CHANGE job_start1 job_start1 INT NOT NULL, CHANGE job_start2 job_start2 INT NOT NULL, CHANGE job_start3 job_start3 INT NOT NULL, CHANGE job_end1 job_end1 INT NOT NULL, CHANGE job_end2 job_end2 INT NOT NULL, CHANGE job_end3 job_end3 INT NOT NULL, CHANGE job_title1 job_title1 VARCHAR(100) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE job_title2 job_title2 VARCHAR(100) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE job_title3 job_title3 VARCHAR(100) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE job_description1 job_description1 VARCHAR(240) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE job_description2 job_description2 VARCHAR(240) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE job_description3 job_description3 VARCHAR(240) NOT NULL COLLATE utf8mb4_unicode_ci');
    }
}
