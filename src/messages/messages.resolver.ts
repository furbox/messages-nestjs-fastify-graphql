import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class MessagesResolver {
  mensajesDB = [
    { id: 0, description: 'Esto es un mensaje como si viniera de la DB' },
  ];

  @Query('messages')
  getMessages() {
    return this.mensajesDB;
  }

  @Mutation()
  createMessage(@Args('description') description: string) {
    const id = this.mensajesDB.length;
    const newMessage = { id, description };
    this.mensajesDB.push(newMessage);
    return newMessage;
  }
}
