import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }
    if (!formData.message) formErrors.message = 'Message is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      setSubmittedData(formData);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
          />
          {errors.message && <p style={styles.error}>{errors.message}</p>}
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
      {submittedData && (
        <div style={styles.submittedData}>
          <h2>Submitted Data</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Message:</strong> {submittedData.message}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minHeight: '100px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
  submittedData: {
    marginTop: '20px',
  },
};

export default FormComponent;
