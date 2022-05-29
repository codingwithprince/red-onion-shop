import React from 'react'
import { breakfast, lunch, dinner } from './allFoods';
import SingleFoodDetails from './SingleFoodDetails';
import SingleFoodItem from './SingleFoodItem';

const Foods = () => {
    const [openTab, setOpenTab] = React.useState(1);
    const [openItem, setOpenItem] = React.useState(false)
    const [singleItem, setSingleItem] = React.useState({})
    const color = 'gray';

  
    const itemClickHandler = () =>{
      if(openItem){
        setOpenItem(false)
      }
    }
  return (
    <>
         <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 justify-center list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="mr-2 text-center">
              <a
                className={
                  "text-sm font-bold border-b-2 border-transparent  px-5 py-3 rounded block leading-normal " +
                  (openTab === 1
                    ? "text-red-500 border-b-2  border-[#f91944]  bg-" + color + "-600"
                    : "text-" + color + "-600 ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Breakfast
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0  text-center">
              <a
                className={
                  "text-sm font-bold border-b-2 border-transparent  px-5 py-3  rounded block leading-normal " +
                  (openTab === 2
                    ? "text-red-500 border-b-2 border-[#f91944]  bg-" + color + "-600"
                    : "text-" + color + "-600 ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Lunch
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  "text-sm font-bold border-b-2 border-transparent   px-5 py-3 rounded block leading-normal " +
                  (openTab === 3
                    ? "text-red-500 border-b-2 border-[#f91944]  bg-" + color + "-600"
                    : "text-" + color + "-600 ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Dinner
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col flex-wrap min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                {
                  openItem ? <div> 
                    <SingleFoodDetails item={singleItem} openItem={setOpenItem} />
                  </div> :
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {
                        breakfast.map(item => <SingleFoodItem setItem={setSingleItem} setOpen={setOpenItem} key={item.price} item={item} />)
                        }
                   </div> 
                }
  
                 
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                {
                  openItem ? <div> 
                    <SingleFoodDetails item={singleItem} openItem={setOpenItem} />
                  </div> :
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {
                        lunch.map(item => <SingleFoodItem setItem={setSingleItem} setOpen={setOpenItem} key={item.price} item={item} />)
                        }
                   </div> 
                }
  
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                {
                  openItem ? <div> 
                    <SingleFoodDetails item={singleItem} openItem={setOpenItem} />
                  </div> :
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {
                        dinner.map(item => <SingleFoodItem setItem={setSingleItem} setOpen={setOpenItem} key={item.price} item={item} />)
                        }
                   </div> 
                }
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 

    </>
  )
}

export default Foods