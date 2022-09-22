import React, { useEffect, useState } from 'react';
import './Style.scss';
import swal from 'sweetalert';
import userApi from '../../../api/userApi';
import { useNavigate } from 'react-router-dom';

//import { Test } from './RegisterJsx.styles';

function RegisterJsx(props) {
  const navigate =useNavigate();
  const [form, setForm] = useState({
    values: {
      email: '',
      password: '',
      passwordConfirm: '',
      name: '',
      phone: '',
      gender: '',
    },
    errors: {
      email: '',
    },
  });

  let handlechange = (evt) => {
    let { name, value } = evt.target;
    setForm({
      ...form,
      values: {
        ...form.values,
        [name]: value,
      },
    });
  };

  let validation = (name, values) => {
    if (name === 'email') {
      if (values === '') {
        return 'Không Được Để Trống';
      } else {
        let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email.test(values)) {
          return 'Email Không Hợp Lệ';
        }
      }
    }
    return '';
  };
  let handlesubmit = async (datas) => {
    delete datas['passwordConfirm'];

    let request = {
      "email": "dfsdfsdfsdfsdfsdfsdfs",
      "password": "sda",
      "name": "ss",
      "gender": true,
      "phone": "2323"
    };
    const data = await userApi.sigUp(request).then((res) =>{
      if (res) {
        swal("", "Bạn Đã Đăng Ký Thành Công!", "success").then(() => {
            navigate('/home')
      });;
      }
    }).catch((err) =>{
      console.log(err);
      swal("Error!", err.response.data.message, "error");
    });
  };
  let handeblur = (evt) => {
    let { name, value } = evt.target;
    console.log(name);
    console.log(value);
    let error = validation(name, value);
    console.log(error);
    setForm({
      ...form,
      errors: {
        ...form.errors,
        [name]: error,
      },
    });
  };

  return (
    <div>
      <section className="register">
        <h2>Register</h2>
        <form>
          <div className="container">
            <div className="col-l">
              <div className="email">
                <input
                  onBlur={handeblur}
                  onChange={handlechange}
                  name="email"
                  value={form.email}
                  type="text"
                  placeholder="email"
                  id="email"
                />

                {/* <input name="email" onChange={handlechange} value={form.email} type="text" placeholder="email" id="email" /> */}
                <span>(*)</span>
              </div>
              <div className="password">
                <input
                  type="password"
                  placeholder="password"
                  onChange={handlechange}
                  name="password"
                  value={form.password}
                  id="password"
                />
                <span>(*)</span>
              </div>
              <div className="confirm">
                <input
                  type="password"
                  onChange={handlechange}
                  name="passwordConfirm"
                  value={form.passwordConfirm}
                  placeholder="password confirm"
                  id="password confirm"
                />
                <span>(*)</span>
              </div>
            </div>
            <div className="col-r">
              <div className="name">
                <input
                  type="text"
                  onChange={handlechange}
                  name="name"
                  value={form.phone}
                  placeholder="name"
                  id="name"
                />
                <span>(*)</span>
              </div>
              <div className="phone">
                <input
                  type="text"
                  onChange={handlechange}
                  name="phone"
                  value={form.phone}
                  placeholder="phone"
                  id="phone"
                />
                <span>(*)</span>
              </div>
              <div className="gender">
                <div onChange={handlechange} className="form-check">
                  <label className="form-check-label" id="gender">
                    Gender
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      className="fix"
                      checked={form.values.gender === 'Male'}
                    />
                    Male
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      className="fix"
                      checked={form.values.gender === 'Female'}
                    />
                    Female
                  </label>
                </div>
              </div>
              <div className="submit" id="submit">
                <a onClick={() => handlesubmit(form.values)} className="bt">
                  Submit
                </a>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default RegisterJsx;
