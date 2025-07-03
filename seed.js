const { sequelize, User, Post, Comment, Tag, PostImage } = require('./models');

async function seed() {
  await sequelize.sync({ force: true });

  const user1 = await User.create({ nickName: 'luna', email: 'luna@example.com' });
  const user2 = await User.create({ nickName: 'sol', email: 'sol@example.com' });
  const user3 = await User.create({ nickName: 'meli', email: 'meli@example.com' });
  const user4 = await User.create({ nickName: 'santi', email: 'santi@example.com' });
  const user5 = await User.create({ nickName: 'juli', email: 'juli@example.com' });



  const tag1 = await Tag.create({ name: 'Mascota' });
  const tag2 = await Tag.create({ name: 'Perro' });
  const tag3 = await Tag.create({ name: 'Eclipse'})
  const tag4 = await Tag.create({ name: 'Paisaje'})
  const tag5 = await Tag.create({ name: 'Argentina'})
  const tag6 = await Tag.create({ name: 'Playa'})



  const post1 = await Post.create({ description: 'Mi primer post', UserId: user1.id });
  const post2 = await Post.create({ description: 'Una de las 7 maravillas del mundo', UserId: user2.id });
  const post3 = await Post.create({ description: 'Atardecer en la playa', UserId: user3.id });
  const post4 = await Post.create({ description: 'Eclipse de luna', UserId: user5.id });
  const post5 = await Post.create({ description: 'Mi nueva mascota', UserId: user4.id });



  await post1.setTags([tag1, tag2]);
  await post2.setTags([tag4, tag5,]);
  await post3.setTags([tag6])
  await post4.setTags([tag3])
  await post5.setTags([tag2, tag1])

  await Comment.create({ content: 'Muy bueno!', UserId: user2.id, PostId: post1.id });
  await Comment.create({ content: 'Muy buen post!', UserId: user4.id, PostId: post1.id });
  await Comment.create({ content: 'Gracias por compartir', UserId: user1.id, PostId: post2.id });
  await Comment.create({ content: 'Que lindo atardecer', UserId: user5.id, PostId: post3.id });

  await PostImage.bulkCreate([
    {
      url: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      PostId: post1.id
    },
    {
      url: 'https://www.hola.com/horizon/landscape/980363e818ef-perros-miniatura-t.jpg?im=Resize=(1200)',
      PostId: post1.id
    },
    {
      url: 'https://imagenes.elpais.com/resizer/v2/7WT3SSNMIUXKBRLG47IRG3DOA4.jpg?auth=cec6bf7a70cea0dc49f55b0fcb3807b9562947d11dd0c2b2e9ac70461f8497ed&width=1960',
      PostId: post2.id
    },
    {
      url: 'https://www.vallartanayaritblog.com/wp-content/uploads/2023/08/Atardecer-en-Puerto-Vallarta-3-1350x900.jpg',
      PostId: post3.id
    },
    {
      url: 'https://media.istockphoto.com/id/1292773439/es/foto/eclipse-lunar-sobre-las-monta%C3%B1as-del-himalaya.jpg?s=612x612&w=0&k=20&c=ZWnJhZO2ppzXFrJ7h36_VEWD5ko3s19ww-c82_3Yb-Q=',
      PostId: post4.id
    },
    {
      url: 'https://media.istockphoto.com/id/1471150192/es/foto/planetas-en-conjunci%C3%B3n-con-luna-llena-sobre-siluetas-de-campos-de-%C3%A1rboles.jpg?s=612x612&w=0&k=20&c=mqP4_i-9ME2PPYK7ScRUoIidN3CQa7wzhUTIfze00KE=',
      PostId: post4.id
    },
    {
      url: 'https://dermissana.com/wp-content/uploads/2025/02/perro_salchicha_o_teckel.png',
      PostId: post5.id
    }

  ]);

  console.log('Base de datos poblada!');
  process.exit();
}

seed();
