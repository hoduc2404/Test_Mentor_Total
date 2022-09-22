import React, { useEffect, useState } from 'react';
import './Style.scss';
import swal from 'sweetalert';
import userApi from '../../../api/userApi';
import { useNavigate } from 'react-router-dom';
function RegisterJsx(props) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    values: {
      email: '',
      password: '',
      passwordConfirm: '',
      name: '',
      phone: '',
      gender: 'Male',
    },
    errors: {
      email: '',
      password: '',
      passwordConfirm: '',
      name: '',
      phone: '',
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
    if (name === 'phone') {
      if (values === '') {
        return 'Không Được Để Trống';
      } else {
        let phone = /(|0)[.\- ]?[0-9][.\- ]?[0-9][.\- ]?[0-9]/;
        if (!phone.test(values)) {
          return 'Số Điện Thoại Không Hợp Lệ';
        }
      }
    }
    if (name === 'passwordConfirm') {
      if (values === '') {
        return 'Không Được Để Trống';
      } else {
        let passsword = form.values.password ;
        if (values !== passsword || passsword !== values) {
          return 'Cần xác nhận lại mật khẩu';
        }
      }
    }
    if (name === 'password') {
      if (values === '') {
        return 'Không Được Để Trống';
      } else {
        let passswordConfirm = form.values.passwordConfirm ;
        if (passswordConfirm !== "") {
          if (values !== passswordConfirm || passswordConfirm !== values) {
            return 'Cần xác nhận lại mật khẩu';
          }
        }
      }
    }
    return '';
  };
  let handlesubmit = async (datas) => {
    for (const key in form.errors) {
      if (form.values[key] === "") {
        swal('Hảy Điền Thông Tin Còn Trống!');
        return;
      }
      if (form.errors[key] !== '') {
        swal('Error!', form.errors[key], 'error');
        return;
      }
    }
    delete datas['passwordConfirm'];
    let requestNew = {
      ...datas,
      gender : datas.gender === "Male" ? true : false
    }

  const data = await userApi.sigUp(requestNew).then((res) =>{
      if (res) {
        swal("", "Bạn Đã Đăng Ký Thành Công!", "success").then(() => {
            navigate('/home')
      });;
      }
    }).catch((err) =>{
      swal("Error!", err.response.data.message, "error");
    });
  };
  let handeblur = (evt) => {
    let { name, value } = evt.target;
    let error = validation(name, value);
    if (error !== '') {
      swal('Error!', error, 'error');
    }
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
                <span>(*)</span>
              </div>
              <div className="password">
                <input
                  onBlur={handeblur}
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
                  onBlur={handeblur}
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
                  onBlur={handeblur}
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
                  onBlur={handeblur}
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
