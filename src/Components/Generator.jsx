import React, { useState } from 'react'
import {SCHEMES, WORKOUTS} from '../utils/lifts'
import Button from './Button'
import SectionWrapper from './SectionWrapper'

function Header(props) {
  const {index, title, description} = props
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-4 items-center justify-center'>
        <p className='text-3xl font-bold text-state-400 sm:text-4xl md:text-5xl'>{index}</p>
          <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-sm  sm:text-base mx-auto'>{description}</p>
    </div>
  )
}

export default function Generator(props) {
const {muscles, setMuscles, poison, setPoison, goal, setGoal, updateWorkout} = props
const [showModal, setShowModal] = useState(false)

//let showModal = false

function toggleModal(){
  setShowModal(!showModal)
}

function updateMuscles(muscleGroup) {
  if (muscles.includes(muscleGroup)) {
    setMuscles(muscles.filter(val => val !== muscleGroup))
    return
  }

    if (muscles.length > 2) {
      return
    }

    if (poison !== 'individual') {
      setMuscles([muscleGroup])
      setShowModal(false)
      return
      }

      setMuscles([...muscles, muscleGroup])
      if(muscles.length === 2){
        setShowModal(false)
      }


    }

  return (
// we want children contect within this section wrapper. Stuff that wont be 
// repeated.
   <SectionWrapper id={'generate'} header={"generate your workout"} title={['Time','To ','Lock In']}>
           <Header index={'01'} title={'Pick your poison'} 
            description={'Select your workout'}/>
    
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'> 
          {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button onClick={()=> {
              setMuscles([])
              setPoison(type)           
            }} className= {
              'bg-slate-950 border duration-200 px-4 hover:border-red-600 py-3 rounded-lg'
              + (type === poison ?' border-red-600' : 'border-red-400')}      
            key={typeIndex}>   
                <p className='capitalize'>{type.replaceAll('_', ' ')}</p>
            </button>
          )       
    })}
</div>

<Header index={'02'} title={'Be Specific'} 
            description={'Select the muscles judged for annillation'} />
    
          <div className='bg-slate-950  border border-solid border-red-50 rounded-lg flex flex-col'>
        
            <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
                <i className="fa-sharp absolute right-3 top-1/2 -translate-y-1/2 fa-regular fa-caret-down"></i>
              </button> 
         {showModal && (
           <div className='flex flex-col px-3 pb-3'>
                {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                  return (                   
                    <button onClick={() => {
                      updateMuscles(muscleGroup)
                    }} key={muscleGroupIndex} className={'hover:text-red-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-red-400' : ' ' )}>
                      <p className='uppercase'>{muscleGroup.replaceAll('_',' ')}</p>
                    </button>
                  )
                })}
                  </div>
         )}
          </div>

          <Header index={'03'} title={'Initiate your Strength Journey'} description={'Select your ultimate objective.'}/>   
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'> 
          {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button onClick={()=> {
              setGoal(scheme)
            }}
            className= {'bg-slate-950 border duration-200 px-4 hover:border-red-600 py-3 rounded-lg' + (scheme === goal ?' border-red-600' : 'border-red-400')} key={schemeIndex}>   
              <p className='capitalize'>{scheme.replaceAll('_', ' ')}</p>
            </button>
            )       
        })}
    </div> 
    <Button func={updateWorkout} text={"Formulate"}></Button>
      </SectionWrapper>
   
    )
  }
