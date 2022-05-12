import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances({ totalIncome, totalExpenses}) {
    return (
        <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title={'Incoming'} value={totalIncome} color={'green'} />
            </Grid.Column>
            <Grid.Column>
            <DisplayBalance title={'Expenses'} value={totalExpenses} color={'red'} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

export default DisplayBalances