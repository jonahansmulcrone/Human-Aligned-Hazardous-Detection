import styles from './SignInPage.module.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import UserServiceAPI from "../../services/userServiceAPI";
import { RegistrationFormData } from '../../utils/types';
import { useState } from 'react';

const SignInPage: React.FC = () => {
    const [formData, setFormData] = useState<RegistrationFormData>({
        email: '',
        password: '',
        state: '',
        city: '',
        licenseAge: '',
        age: 0,
        ethnicity: '',
        carMakeModel: '',
        gender: '',
        badDrivingRecord: '',
        speedingTickets: false,
        atFault: false,
        notAtFault: false,
        dui: false,
        visuallyImpaired: false
    });

    const states = [
        { code: 'AL', name: 'Alabama' },
        { code: 'AK', name: 'Alaska' },
        { code: 'AZ', name: 'Arizona' },
        { code: 'AR', name: 'Arkansas' },
        { code: 'CA', name: 'California' },
        { code: 'CO', name: 'Colorado' },
        { code: 'CT', name: 'Connecticut' },
        { code: 'DE', name: 'Delaware' },
        { code: 'FL', name: 'Florida' },
        { code: 'GA', name: 'Georgia' },
        { code: 'HI', name: 'Hawaii' },
        { code: 'ID', name: 'Idaho' },
        { code: 'IL', name: 'Illinois' },
        { code: 'IN', name: 'Indiana' },
        { code: 'IA', name: 'Iowa' },
        { code: 'KS', name: 'Kansas' },
        { code: 'KY', name: 'Kentucky' },
        { code: 'LA', name: 'Louisiana' },
        { code: 'ME', name: 'Maine' },
        { code: 'MD', name: 'Maryland' },
        { code: 'MA', name: 'Massachusetts' },
        { code: 'MI', name: 'Michigan' },
        { code: 'MN', name: 'Minnesota' },
        { code: 'MS', name: 'Mississippi' },
        { code: 'MO', name: 'Missouri' },
        { code: 'MT', name: 'Montana' },
        { code: 'NE', name: 'Nebraska' },
        { code: 'NV', name: 'Nevada' },
        { code: 'NH', name: 'New Hampshire' },
        { code: 'NJ', name: 'New Jersey' },
        { code: 'NM', name: 'New Mexico' },
        { code: 'NY', name: 'New York' },
        { code: 'NC', name: 'North Carolina' },
        { code: 'ND', name: 'North Dakota' },
        { code: 'OH', name: 'Ohio' },
        { code: 'OK', name: 'Oklahoma' },
        { code: 'OR', name: 'Oregon' },
        { code: 'PA', name: 'Pennsylvania' },
        { code: 'RI', name: 'Rhode Island' },
        { code: 'SC', name: 'South Carolina' },
        { code: 'SD', name: 'South Dakota' },
        { code: 'TN', name: 'Tennessee' },
        { code: 'TX', name: 'Texas' },
        { code: 'UT', name: 'Utah' },
        { code: 'VT', name: 'Vermont' },
        { code: 'VA', name: 'Virginia' },
        { code: 'WA', name: 'Washington' },
        { code: 'WV', name: 'West Virginia' },
        { code: 'WI', name: 'Wisconsin' },
        { code: 'WY', name: 'Wyoming' }
    ];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        let updatedValue: any;

        if (type === 'checkbox') {
            updatedValue = (e.target as HTMLInputElement).checked;
        } else {
            updatedValue = value;
        }

        setFormData((prevState) => ({
            ...prevState,
            [name]: updatedValue,
        }));
    };

    return (
        <div className={styles.container}>
            <div className={styles.containerWrapper}>
                <h2>
                    Welcome to the Human-Aligned Hazard Detection Survey.
                </h2>
                <p>
                    Human Aligned Hazardous Detection (HAHD) is a research initiative aimed at making driving behavior in autonomous systems more aligned with human decision-making.
                </p>
                <div>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-4">
                            <Form.Group as={Col} controlId="formGridEmail" >
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-4">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter City"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                >
                                    <option value="">Select State</option>
                                    {states.map((state, index) => (
                                        <option key={index} value={state.name}>
                                            {state.name}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Row>

                        {/* License Age */}
                        <Form.Group className="mb-4" controlId="formLicenseAge">
                            <Form.Label>At what age did you obtain your license?</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter age"
                                name="licenseAge"
                                value={formData.licenseAge}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        {/* Current Age */}
                        <Form.Group className="mb-4" controlId="formAge">
                            <Form.Label>What is your age?</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter age"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        {/* Ethnicity */}
                        <Form.Group className="mb-4" controlId="formEthnicity">
                            <Form.Label>What is your ethnicity?</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter ethnicity"
                                name="ethnicity"
                                value={formData.ethnicity}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        {/* Make/Model of Car */}
                        <Form.Group className="mb-4" controlId="formCarMakeModel">
                            <Form.Label>What is the make/model of your car?</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter make/model"
                                name="carMakeModel"
                                value={formData.carMakeModel}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        {/* Gender */}
                        <Form.Group className="mb-4" controlId="formGender">
                            <Form.Label>What is your gender?</Form.Label>
                            <Form.Select name="gender" value={formData.gender} onChange={handleChange}>
                                <option value="">Select...</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="prefer-not-to-say">Prefer not to say</option>
                            </Form.Select>
                        </Form.Group>

                        {/* Bad Driving Record */}
                        <Form.Group className="mb-4" controlId="formBadDrivingRecord">
                            <Form.Label>Do you have a bad driving record?</Form.Label>
                            <div>
                                <Form.Check
                                    type="radio"
                                    label="Yes"
                                    name="badDrivingRecord"
                                    value="true"
                                    checked={formData.badDrivingRecord === 'yes'}
                                    onChange={handleChange}
                                />
                                <Form.Check
                                    type="radio"
                                    label="No"
                                    name="badDrivingRecord"
                                    value="false"
                                    checked={formData.badDrivingRecord === 'no'}
                                    onChange={handleChange}
                                />
                            </div>
                        </Form.Group>

                        {/* Bad Driving Record */}
                        <Form.Group className="mb-4" controlId="formBadDrivingRecord">
                            <Form.Label>Are you visually impaired?</Form.Label>
                            <div>
                                <Form.Check
                                    type="radio"
                                    label="Yes"
                                    name="visuallyImpaired"
                                    value="yes"
                                    checked={formData.visuallyImpaired === true}
                                    onChange={handleChange}
                                />
                                <Form.Check
                                    type="radio"
                                    label="No"
                                    name="visuallyImpaired"
                                    value="no"
                                    checked={formData.visuallyImpaired === false}
                                    onChange={handleChange}
                                />
                            </div>
                        </Form.Group>

                        {/* Additional Driving Record Questions */}
                        <Row>
                            <Col>
                                <Form.Check
                                    type="checkbox"
                                    label="Speeding tickets"
                                    name="speedingTickets"
                                    checked={formData.speedingTickets}
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col>
                                <Form.Check
                                    type="checkbox"
                                    label="At-Fault Party"
                                    name="atFault"
                                    checked={formData.atFault}
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col>
                                <Form.Check
                                    type="checkbox"
                                    label="Not-at-Fault Party"
                                    name="notAtFault"
                                    checked={formData.notAtFault}
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col>
                                <Form.Check
                                    type="checkbox"
                                    label="DUI"
                                    name="dui"
                                    checked={formData.dui}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>

                        <Button variant="dark" type="submit" style={{ padding: '8px 45px 8px 45px', marginTop: '25px' }}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default SignInPage;