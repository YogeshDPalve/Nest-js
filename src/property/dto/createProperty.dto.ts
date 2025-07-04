import { IsInt, IsPositive, IsString, Length } from 'class-validator';

export class CreatePorpertyDto {
  //   @IsString({ always: true })
  @IsString()
  @Length(2, 10)
  name: string;
  @IsString()
  @Length(2, 10, { groups: ['create'] })
  @Length(1, 15, { groups: ['update'] })
  description: string;
  @IsInt()
  @IsPositive()
  area: number;
}
