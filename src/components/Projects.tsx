import {useField} from 'formik'
import { projects as projectData } from '../mocks';
import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { ReactElement, useMemo, useState } from 'react';

export const Projects = () => {
  const [projectField, projectMeta] = useField('projectId');
  const [projects, setProjects] = useState(projectData)
  const loading = false;

  const handleProjectSearch = (search: string) => {
    console.log('handleProjectSearch', search)
    if (!search) {
      setProjects(projectData)
      return
    }
    const lowerCaseSearch = search.toLowerCase()
    const filteredProjects = projectData.filter((project) => project.name.toLowerCase().includes(lowerCaseSearch))
    setProjects(filteredProjects)
  }


  const projectIds = useMemo(() => {
    return projects.map((project) => project.id)
  }, [projects])


  return (
    
    <Autocomplete
      autoSelect
      autoHighlight
      loading={loading}
      options={projectIds}
      getOptionLabel={(projectId): string =>
        projects.find((project) => project.id === projectId)?.name ?? ''
      }
      renderInput={(params): ReactElement => (
        <TextField
          {...params}
          size={'medium'}
          variant="outlined"
          label={'Project'}
          onChange={(e) => handleProjectSearch(e.target.value)}
          InputProps={{
            ...params.InputProps,
            'aria-labelledby': 'Project',
            endAdornment: (
              <>
                {loading && <CircularProgress color="primary" size={20} />}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      value={projectField.value}
      onChange={(_, donorAccountId) => projectField.onChange(donorAccountId)}
      // isOptionEqualToValue={(option, value): boolean => option === value}
    />
    
  )
}