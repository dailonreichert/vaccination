import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterUserFieldToUserId1589669556447 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('animals', 'user');

    await queryRunner.addColumn(
      'animals',
      new TableColumn({
        name: 'user_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'animals',
      new TableForeignKey({
        name: 'AnimalUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropForeignKey('animals', 'AnimalUser');

      await queryRunner.dropColumn('animals', 'user_id');

      await queryRunner.addColumn(
        'animals',
        new TableColumn({
          name: 'user',
          type: 'uuid',
        }),
      );
    }

}
