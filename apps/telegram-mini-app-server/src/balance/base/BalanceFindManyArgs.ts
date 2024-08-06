/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BalanceWhereInput } from "./BalanceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BalanceOrderByInput } from "./BalanceOrderByInput";

@ArgsType()
class BalanceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BalanceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BalanceWhereInput, { nullable: true })
  @Type(() => BalanceWhereInput)
  where?: BalanceWhereInput;

  @ApiProperty({
    required: false,
    type: [BalanceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BalanceOrderByInput], { nullable: true })
  @Type(() => BalanceOrderByInput)
  orderBy?: Array<BalanceOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BalanceFindManyArgs as BalanceFindManyArgs };
