import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { FetchContext } from 'context/fetch';
import { AuthContext } from 'context/auth';
import ModalContext from 'context/modal';

import { TextArea, Button } from 'components/shared';
import { Tag } from 'components/tag';

import styles from './add-answer.module.css';

const AddAnswer = ({ id, tags, setQuestion }) => {
    const { authAxios } = useContext(FetchContext);
    const { isAuthenticated } = useContext(AuthContext);
    const { handleComponentVisible } = useContext(ModalContext);

    const [loading, setLoading] = useState(false);

    return (
        <Formik
            initialValues={{ text: '' }}
            onSubmit={async (values, { setStatus, resetForm }) => {
                setLoading(true);
                try {
                    const { data } = await authAxios.post(`/answer/${id}`, values);
                    setQuestion(data);
                    resetForm({});
                } catch (error) {
                    setStatus(error.response.data.message);
                }
                setLoading(false);
            }}
            validationSchema={Yup.object({
                text: Yup.string()
                    .required('Body is missing.')
                    .min(30, 'Body must be at least 30 characters.')
                    .max(30000, 'Body cannot be longer than 30000 characters.')
            })}
        >
            {({
                values,
                errors,
                touched,
                status,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form className={styles.container} onSubmit={handleSubmit}>
                    <h2>Your answer</h2>
                    <TextArea
                        name="text"
                        autoComplete="off"
                        value={values.text}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        hasError={touched.text && errors.text}
                        errorMessage={errors.text && errors.text}
                        className={styles.textarea}
                    />
                    <p className={styles.status}>{status}</p>
                    <div className={styles.button}>
                        <Button
                            type="submit"
                            primary
                            isLoading={loading}
                            disabled={isSubmitting}
                            onClick={() => !isAuthenticated() && handleComponentVisible(true, 'signup')}
                        >
                            Post Your Answer
                        </Button>
                    </div>
                    <h3>
                        Browse other questions tagged &nbsp;
                        {tags.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                        or &nbsp;
                        <Link href="/questions/ask" as="/questions/ask">
                            <a>ask your own question.</a>
                        </Link>
                    </h3>
                </form>
            )}
        </Formik>
    );
};

export default AddAnswer;