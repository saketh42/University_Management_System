import React from 'react';

const EducationPage = () => {
    return (
        <div>
            <h1>Education Questionnaire</h1>
            <form>
                <div>
                    <label htmlFor="highestDegree">Highest Degree Obtained:</label>
                    <input type="text" id="highestDegree" name="highestDegree" />
                </div>
                <div>
                    <label htmlFor="institution">Institution Name:</label>
                    <input type="text" id="institution" name="institution" />
                </div>
                <div>
                    <label htmlFor="graduationYear">Year of Graduation:</label>
                    <input type="number" id="graduationYear" name="graduationYear" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EducationPage;