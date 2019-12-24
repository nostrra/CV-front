import Autocomplete from '@material-ui/lab/Autocomplete';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';


const mapStateToProps = (state) => {
  const { technologyReducer } = state;
  return { technology: technologyReducer };
};

class CreatingCV extends Component {
  render() {
    // eslint-disable-next-line no-console
    console.log(this.props.technology);
    return (
      <Container>
        <h1>Personal Details</h1>
        <Grid
          container
          spacing={6}
        >
          <Grid
            item
            xs={3}
          >
            <TextField
              className='textInput'
              label='First name'
              variant='outlined'
            />
          </Grid>
          <Grid
            item
            xs={3}
          >
            <TextField
              className='textInput'
              label='Second name'
              variant='outlined'
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={6}
        >
          <Grid
            item
            xs={3}
          >
            <TextField
              className='textInput'
              label='Email'
              variant='outlined'
            />
          </Grid>
          <Grid
            item
            xs={3}
          >
            <TextField
              className='textInput'
              label='Phone'
              variant='outlined'
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={6}
        >
          <Grid
            item
            xs={9}
          >
            <TextField
              className='description'
              id='standard-textarea'
              label='Professional summary'
              rows={8}
              multiline
              variant='outlined'
            />
          </Grid>
        </Grid>
        <h1>Technical Summary</h1>
        <Grid
          container
          spacing={6}
        >
          <Grid
            item
            xs={7}
          >
            <Autocomplete
              multiple
              id='tags-filled'
              options={['C', 'C++', 'Java', 'Python']}
              freeSolo
              renderInput={params => (
                <TextField
                  {...params}
                  variant='filled'
                  label='Languages'
                  fullWidth
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={6}
        >
          <Grid
            item
            xs={7}
          >
            <Autocomplete
              multiple
              id='tags-filled'
              options={['PostgreSQL', 'SQLite', 'SQL', 'MongoDB']}
              freeSolo
              renderInput={params => (
                <TextField
                  {...params}
                  variant='filled'
                  label='DBMS'
                  fullWidth
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={6}
        >
          <Grid
            item
            xs={7}
          >
            <Autocomplete
              multiple
              id='tags-filled'
              options={['Git', 'Mercurial', 'CVC']}
              freeSolo
              renderInput={params => (
                <TextField
                  {...params}
                  variant='filled'
                  label='Control version systems'
                  fullWidth
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={6}
        >
          <Grid
            item
            xs={7}
          >
            <Autocomplete
              multiple
              id='tags-filled'
              options={['HTML', 'CSS', 'JavaScript', 'React']}
              freeSolo
              renderInput={params => (
                <TextField
                  {...params}
                  variant='filled'
                  label='Frontend technology'
                  fullWidth
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={6}
        >
          <Grid
            item
            xs={7}
          >
            <Autocomplete
              multiple
              id='tags-filled'
              options={['NodeJS']}
              freeSolo
              renderInput={params => (
                <TextField
                  {...params}
                  variant='filled'
                  label='Backend technology'
                  fullWidth
                />
              )}
            />
          </Grid>
        </Grid>
        <h1>Professional experience</h1>
        <Grid
          container
          spacing={6}
        >
          <Grid
            item
            xs={3}
          >
            <TextField
              className='textInput'
              id='jobTitle'
              label='Job title'
              variant='outlined'
            />
          </Grid>
          <Grid
            item
            xs={3}
          >
            <TextField
              className='textInput'
              id='employer'
              label='Employer'
              variant='outlined'
            />
          </Grid>
          <Grid
            item
            xs={3}
          >
            <TextField
              className='textInput'
              id='city'
              label='City'
              variant='outlined'
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={6}
        >
          <Grid
            item
            xs={3}
          >
            <TextField
              className='textInput'
              id='startDate'
              label='Start date'
              type='date'
              variant='outlined'
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid
            item
            xs={3}
          >
            <TextField
              className='textInput'
              id='endDate'
              label='End date'
              type='date'
              variant='outlined'
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={6}
        >
          <Grid
            item
            xs={9}
          >
            <TextField
              className='description'
              id='standard-textarea'
              label='Description'
              rows={8}
              multiline
              variant='outlined'
            />
          </Grid>
        </Grid>
        <h1>Higher education</h1>
        <Grid
          container
          spacing={6}
        >
          <Grid
            item
            xs={3}
          >
            <TextField
              className='textInput'
              label='University title'
              variant='outlined'
            />
          </Grid>
          <Grid
            item
            xs={3}
          >
            <TextField
              className='textInput'
              label='Profession'
              variant='outlined'
            />
          </Grid>
          <Grid
            item
            xs={3}
          >
            <TextField
              className='textInput'
              id='city'
              label='City'
              variant='outlined'
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(CreatingCV);
