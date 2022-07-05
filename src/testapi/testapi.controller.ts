import { Controller, Get, Param } from '@nestjs/common';

@Controller('testapi')
export class TestapiController {
  @Get()
  getAll() {
    return 'This function is Only TEST :: ALL'
  }
  
  @Get('/test')
  getOne() : string {
    return 'This function is Only TEST :: ONE'
  }

  @Get('/:id')
  getOneParam(@Param('id') id: string) {
    console.log(`type of id :: ${typeof(id)}`)
    return `This function is Only TEST :: ${id}`
  }
}
