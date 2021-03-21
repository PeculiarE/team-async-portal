<template>
  <div class="assessment-form mt-5">
    <h1>Compose Assessment</h1>
    <b-form>
      <p class="text-left">15/30</p>
      <div class="d-flex justify-content-evenly align-items-center">
        <div>
          <input type="file" hidden id="upload-btn" />
          <label for="upload-btn"
            ><small class="mr-3">+</small>Choose file</label
          >
        </div>
        <div class="ml-5">
          <p>Set Time</p>
          <div class="custom-select mr-5">
            <select name="minutes" id="minutes">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
              <option value="45">45</option>
              <option value="46">46</option>
              <option value="47">47</option>
              <option value="48">48</option>
              <option value="49">49</option>
              <option value="50">50</option>
              <option value="51">51</option>
              <option value="52">52</option>
              <option value="53">53</option>
              <option value="54">54</option>
              <option value="55">55</option>
              <option value="56">56</option>
              <option value="57">57</option>
              <option value="58">58</option>
              <option value="59">59</option>
            </select>
          </div>
          <div class="custom-select">
            <select name="seconds" id="seconds">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
              <option value="45">45</option>
              <option value="46">46</option>
              <option value="47">47</option>
              <option value="48">48</option>
              <option value="49">49</option>
              <option value="50">50</option>
              <option value="51">51</option>
              <option value="52">52</option>
              <option value="53">53</option>
              <option value="54">54</option>
              <option value="55">55</option>
              <option value="56">56</option>
              <option value="57">57</option>
              <option value="58">58</option>
              <option value="59">59</option>
            </select>
          </div>
        </div>
      </div>
      <b-form-group
        label="Question"
        label-for="textarea"
        id="textarea-label"
        rows="8"
      >
        <b-form-textarea id="textarea"></b-form-textarea>
      </b-form-group>
      <div class="d-flex justify-content-between">
        <b-form-group id="input-group-1" label="Option A" label-for="input-1">
            <b-form-input id="input-1" type="text" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Option B" label-for="input-2">
            <b-form-input id="input-2" required></b-form-input>
        </b-form-group>
      </div>
      <div class="d-flex justify-content-between">
        <b-form-group id="input-group-3" label="Option C" label-for="input-3">
            <b-form-input id="input-3" type="text" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-4" label="Option D" label-for="input-4">
            <b-form-input id="input-4" required></b-form-input>
        </b-form-group>
      </div>
      <div class="btn-grp d-flex justify-content-between">
        <b-button id="prev-btn" variant="dark">Previous</b-button>
        <b-button id="next-btn" variant="dark">Next</b-button>
      </div>
      <div class="text-center">
        <b-button id="finish-btn" type="submit" disabled variant="dark">Finish</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'AssessmentQuestions',
};
</script>

<style scoped>
.assessment-form h1 {
  font-style: normal;
  font-weight: 300;
  font-size: 43px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
.assessment-form p {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #2b3c4e;
}
label {
  font-size: 14px;
  line-height: 20px;
  color: #2b3c4e;
  background-color: #ffffff;
  padding: 2rem 10rem;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
  border: 1.5px dashed #2b3c4e;
}
.custom-select {
  width: 70px;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
}
#input-group-1,
#input-group-2,
#input-group-3,
#input-group-4,
#textarea-label {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
  text-align: left;
}
#input-1,
#input-2,
#input-3,
#input-4 {
  width: 379px;
  height: 41px;
  border: 1.5px solid #2B3C4E;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #ffffff;
}
#textarea {
  border: 1.5px solid #2B3C4E;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 19px;
  background-color: #ffffff;
}
.btn-grp {
  padding: 0 70px;
  box-sizing: border-box;
  margin-top: 20px;
  margin-bottom: 20px;
}
#prev-btn, #next-btn {
  height: 41px;
  width: 125px;
  color: #ffffff;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
}
#finish-btn {
  height: 41px;
  width: 205px;
  color: #ffffff;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
}
</style>
