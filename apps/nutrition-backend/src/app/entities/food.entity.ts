import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FoodEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("float")
  kcal: number;

  @Column("float")
  kJ: number;

  @Column("float")
  protein: number;

  @Column("float")
  lipids: number;

  @Column("float")
  cholesterol: number;

  @Column("float")
  carbohydrates: number;

  @Column("float")
  dietaryFiber: number;

  @Column("float")
  calcium: number;

  @Column("float")
  magnesium: number;

  @Column("float")
  manganese: number;

  @Column("float")
  phosphorus: number;

  @Column("float")
  iron:number;

  @Column("float")
  sodium: number;

  @Column("float")
  potassium: number;

  @Column("float")
  copper: number;

  @Column("float")
  zinc: number;

  @Column("float")
  vitaminC: number;


}
