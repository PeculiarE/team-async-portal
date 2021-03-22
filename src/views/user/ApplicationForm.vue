<template>
  <div class="d-flex flex-column justify-content-center align-items-center m-5">
    <div class="d-flex flex-column justify-content-center align-items-center mb-2">
      <div>
        <img src="../assets/logo.svg" alt="" />
      </div>
      <div>
        <h3>enyata</h3>
      </div>
      <div>
        <p><i>Application Form</i></p>
      </div>
    </div>

    <div class="form-container p-5">
      <form>
        <div class="form-row justify-content-around d-flex mb-4">
            <div>
                <label for="upload-cv" class="justify-content-center d-flex align-items-center">
                + Upload CV</label>
            <input type="file" name="CV" id="upload-cv" />
            </div>
            <div>
                <label for="upload-photo" class="justify-content-center d-flex align-items-center">
                + Upload Image</label>
            <input type="file" name="photo" id="upload-photo" />
            </div>
        </div>
        <div>
            <div class="form-row justify-content-between mb-4">
          <div class="col-12 col-md-6">
            <label for="firstName">First Name</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-12 col-md-6">
            <label for="lastName">Last Name</label>
            <input type="text" class="form-control" />
          </div>
            </div>
            <div class="form-row justify-content-between mb-4">
            <div class="col-12 col-md-6">
                <label for="email">Email</label>
                <input type="text" class="form-control" />
            </div>
            <div class="col-12 col-md-6">
                <label for="dob">Date of Birth</label>
                <input type="text" class="form-control" placeholder="dd/mm/yyyy" />
            </div>
            </div>
            <div class="form-row justify-content-between mb-4">
            <div class="col-12 col-md-6">
                <label for="address">Address</label>
                <input type="text" class="form-control" />
            </div>
            <div class="col-12 col-md-6">
                <label for="university">University</label>
                <input type="text" class="form-control" />
            </div>
            </div>
            <div class="form-row justify-content-between mb-3">
            <div class="col-12 col-md-6">
                <label for="course">Course of Study</label>
                <input type="text" class="form-control" />
            </div>
            <div class="col-12 col-md-6">
                <label for="cgpa">CGPA</label>
                <input type="text" class="form-control" />
            </div>
            </div>
        </div>
        <div class="form-row justify-content-center">
          <button type="submit" class="btn d-flex text-center mt-5 align-items-center
          justify-content-center text-white">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplicationForm',
};
</script>

<style scoped>
.form-container {
  width: 965px;
  height: 645px;
  background-color: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: #2B3C4E;
  overflow: hidden;
}

p {
    font-size: 24px;
}

h3 {
    font-size: 32px;
}
label {
 margin-left: 25px;
}

label[for="upload-photo"], label[for="upload-cv"], input[type="file"] {
   cursor: pointer;
   border-radius: 3px;
   border: 1.5px dashed #2B3C4E;
   width: 211px;
   height: 49.97px;
}

#upload-photo, #upload-cv {
   opacity: 0;
   position: absolute;
   z-index: -1;
}

input {
    border: 1.5px solid #2B3C4E;
    outline: none;
    margin: auto;
    border-radius: 4px;
    width: 379px;
    height: 41px;
}

button {
    background-color: #2B3C4E;
    width: 379px;
    height: 50px
}

@media only screen and (max-width: 768px) {
}
</style>
