<template>
    <div create-application mt-5>
        <div class="title">Create Application</div>
        <b-form class="form">
            <div class="d-flex justify-content-evenly align-items-center">
                <div class="choose-file">
                    <input type="file" hidden id="choose-file" />
                    <label for="choose-file"
                        ><small class="mr-3">+</small>Choose file</label
                    >
                </div>
                <b-form-group id="input-group-1" label="Link" label-for="input-1">
                <b-form-input id="input-1" type="text" required></b-form-input>
                </b-form-group>
            </div>
            <div class="d-flex justify-content-between">
                <b-form-group
                id="input-group-2"
                label="Application closure date"
                label-for="input-2">
                    <b-form-input id="input-2" type="text" required></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-3" label="Batch ID" label-for="input-3">
                    <b-form-input id="input-3" required></b-form-input>
                </b-form-group>
            </div>
            <b-form-group
            id="input-group-4"
            label="Instructions"
            label-for="input-4">
                    <b-form-input id="input-4" required></b-form-input>
            </b-form-group>
            <div class="text-center">
                <b-button id="submit-btn" type="submit">Submit</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
export default {
  name: 'AdminCreateApplication',
};
</script>

<style scoped>
.title {
    font-weight: 300;
    margin-top: 50px;
    font-size: 43.5555px;
    font-style: normal;
    line-height: 52px;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}
.form {
    margin-top: -20px;
}
.choose-file {
    width: 456px;
    height: 94.92px;
    border: 1.55172px dashed var(--text-primary);
    padding: 2rem 10rem;
    cursor: pointer;
    margin-top: 1rem;
    border-radius: 6.2069px;
    margin: 62px 64px 52px 0;
}
#input-group-1,
#input-group-2,
#input-group-3,
#input-group-4 {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: var(--text-primary);
  text-align: left;
}
#input-group-4 {
    margin-top: 36px;
}
#input-1,
#input-2,
#input-3 {
  width: 456px;
  height: 41px;
  border: 1.5px solid var(--text-primary);
  box-sizing: border-box;
  border-radius: 4px;
}
#input-4 {
    width: 976px;
    height: 144px;
    border: 1.5px solid var(--text-primary);
    box-sizing: border-box;
}
#submit-btn {
    width: 379px;
    height: 50px;
    background-color: var(--enyata-purple);
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    font-family: Lato;
    margin-top: 60px;
}
</style>
