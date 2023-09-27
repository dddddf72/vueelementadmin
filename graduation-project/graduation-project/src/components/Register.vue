<template>
  <div class="register">
    <div class="from">
      <Form
        ref="formCustom"
        :model="formCustom"
        :rules="ruleCustom"
        :label-width="80"
        action="/rist"
        method="post"
        role="form"
        enctype="multipart/form-data"
      >
        <div class="rs-img">
          <img src="../images/ndz.jpg" />
        </div>
        <div>
          <input id="file" type="file"  name="file"></input>
        </div>
        <FormItem label="昵称" prop="name">
          <Input
            type="text"
            v-model="formCustom.name"
            name="name"
            number
          ></Input>
        </FormItem>
        <FormItem label="账号" prop="num">
          <Input type="text" v-model="formCustom.num" name="num" number></Input>
        </FormItem>
        <FormItem label="密码" prop="passwd">
          <Input
            type="password"
            v-model="formCustom.passwd"
            name="passwd"
          ></Input>
        </FormItem>
        <FormItem label="密码验证" prop="passwdCheck">
          <Input type="password" v-model="formCustom.passwdCheck"></Input>
        </FormItem>
        <FormItem label="年龄" prop="age">
          <Input type="text" v-model="formCustom.age" name="age" number></Input>
        </FormItem>
        <div class="rs-sex">
          <CheckboxGroup v-model="border" @on-change="">
            <Checkbox label="男" border="男"></Checkbox>
            <Checkbox label="女" border="女"></Checkbox>
          </CheckboxGroup>
        </div>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formCustom')" class="btn"
            >注册</Button
          >
          <Button @click="handleReset('formCustom')" style="margin-left: 8px" class="btn"
            >重置</Button
          >
          <Button type="warning" @click="revise('formCustom')" class="btn"
            >修改</Button
          >
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import "../css/Register.css";
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password"));
      } else {
        if (this.formCustom.passwdCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField("passwdCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password again"));
      } else if (value !== this.formCustom.passwd) {
        callback(new Error("The two input passwords do not match!"));
      } else {
        callback();
      }
    };
    const validateAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("Age cannot be empty"));
      }
      // 模拟异步验证效果
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("Please enter a numeric value"));
        } else {
          if (value < 18) {
            callback(new Error("Must be over 18 years of age"));
          } else {
            callback();
          }
        }
      }, 1000);
    };

    return {
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      formCustom: {
        file: "",
        passwd: "",
        passwdCheck: "",
        age: "",
        num: "",
        name: "",
      },
      ruleCustom: {
        passwd: [{ validator: validatePass, trigger: "blur" }],
        passwdCheck: [{ validator: validatePassCheck, trigger: "blur" }],
        age: [{ validator: validateAge, trigger: "blur" }],
      },
    };
  },
  methods: {
    handleSubmit(value) {
      this.$refs[value].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
      var file = document.getElementById("file").files[0];
      var name = this.formCustom.name;
      var num = this.formCustom.num;
      var passwd = this.formCustom.passwd;
      var age = this.formCustom.age;
      var sex = this.border;
      var formData= new FormData();
      formData.append('file',file)
      formData.append('name',name)
      formData.append('num',num)
      formData.append('passwd',passwd)
      formData.append('age',age)
      formData.append('sex',sex)

      this.http({
        method: "post",
        url: "http://124.71.180.178:8001/rist",
        data:formData
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
        this.$router.push({
          path:'/',
        })
    },
    revise(value){
      this.$refs[value].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
      var file = document.getElementById("file").files[0];
      var name = this.formCustom.name;
      var num = this.formCustom.num;
      var passwd = this.formCustom.passwd;
      var age = this.formCustom.age;
      var sex = this.border;
      var formData= new FormData();
      formData.append('file',file)
      formData.append('name',name)
      formData.append('num',num)
      formData.append('passwd',passwd)
      formData.append('age',age)
      formData.append('sex',sex)

      this.http({
        method: "post",
        url: "http://124.71.180.178:8001/doEdit",
        data:formData
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    handleRemove(file) {
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped>
.btn {
  margin-top: 20px;
  margin-left: 20px;
}
</style>