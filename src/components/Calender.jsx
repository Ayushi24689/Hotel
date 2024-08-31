import React from "react";
import { IoIosCalendar } from "react-icons/io";

const Calender = () =>{
    return(
        <>
        <div class="booking-wrapper">
            <div class="container">
                <div class="booking-inner clearfix">
                    <form action="?page_id=2580" method="post" class="form1 clearfix">
                        <div class="col1 c1">
                            <div class="input1_wrapper">
                                <label>Check in</label>
                                <div class="input1_inner">
                                    <input type="text" class="form-control input datepicker hasDatepicker" placeholder="Check in" id="dp1713838149015"/>
                                </div>
                            </div>
                        </div>
                        <div class="col1 c2">
                            <div class="input1_wrapper">
                                <label>Check out</label>
                                <div class="input1_inner">
                                    <input type="text" class="form-control input datepicker hasDatepicker" placeholder="Check out" id="dp1713838149016"/>
                                </div>
                            </div>
                        </div>
                        <div class="col2 c3">
                            <div class="select1_wrapper">
                                <label>Adults</label>
                                <div class="select1_inner">
                                    <select class="select2 select select2-hidden-accessible" name="adult_count"  data-select2-id="1" tabindex="-1" aria-hidden="true">
                                        <option value="1" data-select2-id="3">1 Adult</option>
                                        <option value="2">2 Adults</option>
                                        <option value="3">3 Adults</option>
                                        <option value="4">4 Adults</option>
                                    </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-adult_count-e4-container"><span class="select2-selection__rendered" id="select2-adult_count-e4-container" role="textbox" aria-readonly="true" title="1 Adult">1 Adult</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                </div>
                            </div>
                        </div>
                        <div class="col2 c4">
                            <div class="select1_wrapper">
                                <label>Children</label>
                                <div class="select1_inner">
                                    <select class="select2 select select2-hidden-accessible" name="children_count"  data-select2-id="4" tabindex="-1" aria-hidden="true">
                                        <option value="1" data-select2-id="6">1 Children</option>
                                        <option value="2">2 Children</option>
                                        <option value="3">3 Children</option>
                                        <option value="4">4 Children</option>
                                    </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="5"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-children_count-f4-container"><span class="select2-selection__rendered" id="select2-children_count-f4-container" role="textbox" aria-readonly="true" title="1 Children">1 Children</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                </div>
                            </div>
                        </div>
                        <div class="col2 c5">
                            <div class="select1_wrapper">
                                <label>Rooms</label>
                                <div class="select1_inner">
                                    <select class="select2 select select2-hidden-accessible"  data-select2-id="7" tabindex="-1" aria-hidden="true">
                                        <option value="1" data-select2-id="9">1 Room</option>
                                        <option value="2">2 Rooms</option>
                                        <option value="3">3 Rooms</option>
                                        <option value="4">4 Rooms</option>
                                    </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="8"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-bbn5-container"><span class="select2-selection__rendered" id="select2-bbn5-container" role="textbox" aria-readonly="true" title="1 Room">1 Room</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                </div>
                            </div>
                        </div>
                        <div class="col3 c6">
                            <button type="submit" class="btn-form1-submit">Check Now</button>
                        </div>
                    </form>
                </div>
            </div>
    	</div>
        </>
    )
}

export default Calender;