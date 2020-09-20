import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AlterAppointmentsFields1599969252079
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('appointments', 'user');
    await queryRunner.dropColumn('appointments', 'animal');
    await queryRunner.dropColumn('appointments', 'vaccine');

    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'user_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'animal_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'vaccine_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'appointments',
      new TableForeignKey({
        name: 'AppointmentUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'appointments',
      new TableForeignKey({
        name: 'AppointmentAnimal',
        columnNames: ['animal_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'animals',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'appointments',
      new TableForeignKey({
        name: 'AppointmentVaccine',
        columnNames: ['vaccine_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'vaccines',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('appointments', 'AppointmentUser');
    await queryRunner.dropForeignKey('appointments', 'AppointmentAnimal');
    await queryRunner.dropForeignKey('appointments', 'AppointmentVaccine');

    await queryRunner.dropColumn('appointments', 'user_id');
    await queryRunner.dropColumn('appointments', 'animal_id');
    await queryRunner.dropColumn('appointments', 'vaccine_id');

    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'user',
        type: 'uuid',
      }),
    );

    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'animal',
        type: 'uuid',
      }),
    );

    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'vaccine',
        type: 'uuid',
      }),
    );
  }
}
