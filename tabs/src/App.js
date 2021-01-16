import React from 'react'
import { TabContent, TabLink, Tabs } from 'react-tabs-redux'

function BookingPage() {
  return (
    <div className="pop_wrap">
      <p className="big mr-bnt-20px">Explore our food</p>
      <div className="book_wrap">
        <div className="book_left">
        <Tabs renderActiveTabContentOnly={true}>
          <div className="book_menuHead">
            <TabLink to="tab1" default>
              <div className="set_Name">SET MENUS</div>
            </TabLink>
            <TabLink to="tab2">
              <div className="set_Name">DISHES</div>
            </TabLink>
            
            
          </div>  
            <TabContent for="tab1">Set Menus</TabContent>
            <TabContent for="tab2">Dishes</TabContent>
          </Tabs> 
          
          
        </div>
        <div className="book_right">
          <p className="sm_big">Your Menu</p>
        </div>
      </div>
    </div>
    
  )
}

export default BookingPage

