import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from '../../../base/entities/base.entity';
import { GenderEnum } from '../../../base/enums/gender.enum';

@Entity()
export class Employee extends Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name', length: 10 })
  firstName: string;

  @Column({ name: 'last_name', length: 10 })
  lastName: string;

  @Column({ name: 'email', length: 256 })
  email: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column({ name: 'photo', default: "https://randomuser.me/api/portraits/men/92.jpg" })
  photo: string;

  @Column({
    name: 'gender', type: 'enum',
    enum: GenderEnum,
  })
  gender: GenderEnum;
}
