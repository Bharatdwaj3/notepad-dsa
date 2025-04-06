//import {Ctype} from './types'

const Hero = () => {
  return (
    <>
       <div className='p-16 h-[3200px] w-screen absolute top-115 bg-lime-300'>
          
            <div className='mt-32 p-8 h-[900px] w-[1360px] rounded-xl bg-amber-200 flex flex-row'>
              <div className='h-[800px] w-2/3  flex flex-col'>
                <div className='h-1/3 w-[1300px]  border-b-4 border-stone-500'>
                  <p className='italic text-gray-950 text-xl p-3 mr-[500px] ml-12 mt-12'>
                      It doesn’t need to be perfect or traditional — it just needs to work for you.
                      Maybe it’s bullet points, doodles, colors, or quick thought dumps — that’s all valid.
                      Your notes are reflections of how you think, feel, and process the world around you.
                      They don’t have to look like anyone else’s to be effective.
                      What matters is that you understand them and that they help you move forward.
                      You’re not just writing things down — you’re building a mental map for success.
                      That’s a skill worth celebrating every time you sit down to create.
                  </p>
                </div>
                <div className='h-1/3 w-[1300px] border-b-4 border-stone-500'>
                  <p className='italic text-gray-950 text-xl p-3 mr-[500px] ml-12 mt-12'>Finding your focus in a noisy world can feel tough, but it’s not impossible.
Sometimes, all it takes is the right environment or the right system.
A solid productivity app can help bring structure without restricting your flow.
Especially one with plugin support — so you can tailor it to your own brain.
Local storage means privacy and control, giving you a safe space to work.
Something that reminds you it’s okay to go at your own pace and reset.
Productivity isn’t about speed — it’s about meaningful progress.</p>
                </div>
                <div className='h-1/3 w-[1300px] border-b-4 border-stone-500'>
                  <p className='italic text-gray-950  text-xl p-3 mr-[500px] ml-12 mt-11'>
                    You’re not just organizing tasks or notes — you’re building a life system.
One that grows with your interests, adapts to your energy, and supports your focus.
Your workflow doesn’t need to be complicated, just aligned with how you function best.
It’s okay to try, adjust, and rebuild — that’s part of the process.
Each plugin, layout, or tweak you make is an act of self-discovery.
You’re capable, resourceful, and doing better than you think.
                  </p>
                </div>
              </div>
              <div className='h-[800px] w-1/3  '>
                <div className='relative h-3/3 w-[435px]  bg-amber-200'>
                  <img className='absolute top-60 z-50' src="src\assets\Bol.png" alt="" />
                </div>
              </div>
            </div>
            <div className='mt-24 grid grid-cols-2 grid-rows-2 gap-6 p-8 h-[800px] w-[1360px] '>
                <div className='p-8 bg-amber-300 rounded-2xl'>AGrid</div>
                <div className='p-8 bg-amber-300 rounded-2xl'>BGrid</div>
                <div className='p-8 bg-amber-300 rounded-2xl'>CGrid</div>
                <div className='p-8 bg-amber-300 rounded-2xl'>DGrid</div>
            </div>
            <div className='mt-32 p-8 h-[900px] w-[1360px] rounded-xl bg-amber-200'></div>
        </div>
    </>
  )
}

export default Hero