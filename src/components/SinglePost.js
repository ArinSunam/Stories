import React from 'react'
import { useGetPostDetailQuery } from '../features/BlogApi'
import { useParams } from 'react-router'

// PURAI ERROR


const SinglePost = () => {

  const { _id } = useParams();
  const { isLoading, isError, error, data } = useGetPostDetailQuery(_id);





  return (

    <>
      {data && <div className=' w-9/12'>
        <div className='p-[30px] pr-0'>
          <img className='w-full h-[300px] rounded-[5px] object-cover' src="https://images.unsplash.com/photo-1655183806422-e40565e79e5c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3RyaWMlMjBndWl0YXIlMjBwbGF5ZXJ8ZW58MHx8MHx8fDA%3D" alt="" />

          <h1 className='text-center text-[28px]'>{data.title}
            <div className='float-right text-[16px] cursor-pointer'>
              <i className='fa-regular fa-pen-to-square
            text-blue-400'></i>
              <i className='fa-solid fa-trash
            ml-[10px] text-red-600'></i>
            </div>
          </h1>
          <div className='mb-[20px] flex justify-between text-base text-orange-500 '>
            <span>Author: <b>Meow</b> </span>
            <span>1 hour ago</span>
          </div>

          <p className='text-gray-700 text-lg leading-[25px] first-letter:ml-[20px] first-letter:text-[30px] first-letter:font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam delectus illo placeat? Deserunt reprehenderit quam sed inventore corrupti vero molestias voluptate impedit! Aliquam totam similique minima, quibusdam ducimus eveniet maxime laboriosam, dolorum tempora consequatur necessitatibus numquam vero. Accusamus quibusdam ipsam ab asperiores corporis rerum, veniam earum sed porro labore? Architecto molestias vel, rerum est aperiam recusandae expedita odio provident cum laudantium corrupti, perspiciatis eius harum fuga illum sequi! Quisquam alias laudantium ipsum, ad sapiente ratione veniam quasi natus, repudiandae quo iure distinctio molestias! Omnis error temporibus, et, voluptatem voluptatum similique sequi, impedit architecto reiciendis recusandae dignissimos fuga dolor blanditiis! Voluptate labore veniam, in ab, magnam inventore et minima deserunt numquam hic similique id dolores eos perspiciatis, nulla sequi vitae asperiores? Inventore unde sed ex eligendi velit ea saepe ullam! Nihil molestias earum iusto vero eaque sequi, vel eos. Cupiditate ducimus accusantium perferendis cumque quo consequatur odio est, cum in saepe eveniet fugit repudiandae odit, repellendus sunt ratione ipsum modi optio, ad delectus veritatis officiis nobis. Saepe reprehenderit iusto doloribus sed deleniti, iure aut repellat accusamus quis nesciunt. Excepturi eligendi ea nostrum modi ipsam aspernatur quisquam quae harum? Laboriosam officia qui omnis error animi, perferendis dolorum dolorem suscipit quibusdam quidem soluta, earum dolor aut molestiae porro veniam, consequatur doloremque possimus voluptas natus! Omnis earum, ipsa eos eaque veritatis error cupiditate placeat. Facilis rerum minus est voluptas! Vel ipsam ipsum voluptatem? Aspernatur atque repudiandae minima, praesentium molestiae nemo animi aliquam ut dignissimos tempora! Minima esse consequuntur asperiores dolorem, labore nesciunt quisquam minus, amet alias magnam nulla laboriosam tempore sed tempora molestias. Atque maxime quia inventore? Tempora vitae eaque ab. Earum, sint molestias, maiores, officia iste sit animi ex inventore nihil omnis natus quidem beatae minima. Nemo eligendi fugit aliquam earum perferendis deserunt distinctio, corporis nesciunt quae omnis. Fugit iusto exercitationem ad tempora! Laboriosam debitis corporis architecto, magnam delectus voluptates enim necessitatibus eius, officia, ut voluptas accusamus nam culpa! Sit commodi earum quidem eum cumque reprehenderit. Delectus earum velit atque reprehenderit exercitationem, minus commodi molestias possimus iste pariatur eos voluptas eaque ex dolorem labore temporibus. Placeat esse aliquam, velit assumenda asperiores deleniti repellat rem, porro quod cupiditate, doloremque nobis quisquam fuga laborum quia aliquid qui odit debitis laboriosam. Obcaecati dolor optio vel alias dicta provident fugit quidem veritatis, voluptatem repudiandae debitis temporibus! Dolor vitae officia consectetur nulla, quibusdam eos, tenetur veritatis error cum quidem iusto iste! Mollitia quis dolore maiores voluptatum quasi voluptatem inventore, sequi nostrum beatae dolorem ab obcaecati omnis, impedit officia ipsum repudiandae atque sit facere! Fuga praesentium excepturi neque quos! Corrupti molestias magnam libero officiis asperiores, reiciendis qui iure debitis eligendi. Sunt iure fugiat doloremque commodi. Veritatis quo itaque ratione deleniti. Odit alias magni consequuntur fuga, laborum, totam possimus maiores deserunt nobis minus dolorum tenetur deleniti consectetur quibusdam doloremque impedit dicta doloribus excepturi adipisci delectus, cum sint quaerat explicabo? Porro animi, at neque laboriosam odit molestias. Deleniti recusandae commodi ut tempore ex quibusdam omnis similique eveniet id officiis nostrum adipisci obcaecati temporibus neque natus, voluptatibus, doloribus sunt sapiente. Accusantium, tempora.</p>
        </div>


      </div>}
    </>



  )
}

export default SinglePost
