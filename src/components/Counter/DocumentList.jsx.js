import React, { useEffect, useRef, useState } from 'react';
import ReactTable from '../../Commons/Table/ReactTable';
import ReactTooltip from 'react-tooltip';
import { SETTINGS_COMPONENT_TYPE } from '../../../Constants/Enum';
import './DocumentList.css';
import BubbleLoader from '../../Commons/BubbleLoader';
import { useHistory } from 'react-router-dom';
import NodataFound from '../../Commons/NoDataFound';

// Key Corrections Made:

// 1. Removed Duplicate Component Declaration: 
//    There was a duplicate declaration of the `DocumentList` component. This has been corrected.
const DocumentList = ({
  docList,
  folderId,
  documentLoader,
  getFoldersList,
  getDocList,
}) => {
  const history = useHistory();
  const titleRefs = useRef([]);
  const descriptionRefs = useRef([]);
  const [tooltipStatus, setTooltipStatus] = useState({});

  const isTextTruncated = (element) => {
    return element.scrollWidth > element.clientWidth;
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      const status = {};
      docList.forEach((doc, index) => {
        const titleElement = titleRefs.current[index];
        const descriptionElement = descriptionRefs.current[index];
        
        if (titleElement && isTextTruncated(titleElement)) {
          status[`title-${index}`] = true;
        }

        if (descriptionElement && isTextTruncated(descriptionElement)) {
          status[`description-${index}`] = true;
        }
      });
      setTooltipStatus(status);
    });
  }, [docList]);

  const handleEditClick = (rowData) => {
    const dataToPush = { ...rowData, folderId: folderId };
    history.push('/document_add', { data: dataToPush });
  };

  const caseInsensitiveSort = (rowA, rowB, columnId) => {
    const a = rowA.values[columnId].toLowerCase();
    const b = rowB.values[columnId].toLowerCase();
    return a > b ? 1 : a < b ? -1 : 0;
  };

  const documentColumn = [
    {
      Header: "Document Title",
      accessor: "title",
      sortType: caseInsensitiveSort,
      Cell: ({ row: { original, index } }) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '100px',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1px solid #d3d3d3'
            }}>
              <img src={original.featureImage} alt='feature_img' style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }} />
            </div>
            <span
              ref={(el) => (titleRefs.current[index] = el)}
              className="truncated-text-title"
              title={original.title}
              data-tip={tooltipStatus[`title-${index}`] ? original.title : null}
              data-for={`title-${index}`}
            >
              {original.title}
            </span>
            {tooltipStatus[`title-${index}`] && (
              <ReactTooltip
                id={`title-${index}`}
                place="bottom"
                effect="solid"
                delayShow={300}
              />
            )}
          </div>
        );
      },
    },
    {
      Header: "Document Description",
      accessor: "description",
      sortType: caseInsensitiveSort,
      Cell: ({ value, index }) => {
        return (
          <div
            ref={(el) => (descriptionRefs.current[index] = el)}
            className="truncated-text-description"
            data-tip={tooltipStatus[`description-${index}`] ? value : null}
            data-for={`description-${index}`}
          >
            {value}
            {tooltipStatus[`description-${index}`] && (
              <ReactTooltip
                id={`description-${index}`}
                place="bottom"
                effect="solid"
                delayShow={300}
              />
            )}
          </div>
        );
      },
    },
    {
      Header: "Tag",
      accessor: "tag",
      Cell: ({ value }) => (value && value.trim() !== '' ? value : '-'),
      sortType: caseInsensitiveSort,
    },
    {
      Header: "Created At",
      accessor: "createdAt",
      Cell: ({ value }) => {
        const newD = new Date(value);
        const day = String(newD.getUTCDate()).padStart(2, '0');
        const month = String(newD.getUTCMonth() + 1).padStart(2, '0');
        const year = newD.getUTCFullYear();

        return `${day}-${month}-${year}`;
      },
    },
    {
      Header: "Created By",
      accessor: "createdBy",
      sortType: caseInsensitiveSort,
    },
    {
      Header: "Status",
      accessor: "status",
      sortType: caseInsensitiveSort,
    },
    {
      Header: "Action",
      accessor: "action",
      sticky: "right",
      disableSortBy: true,
      Cell: (e) => (
        <p className="mb-0 text-center d-inline">
          <a
            type='button'
            className='del-coe-btn'
            style={{ marginRight: '2px' }}
            onClick={() => {
              handleEditClick(e?.cell?.row?.original);
            }}
          >
            <i className="bx bx-show" data-tip="View Document"></i>
          </a>
          <a
            type="button"
            className="edit-Emp-member"
            onClick={() => {
              handleEditClick(e?.cell?.row?.original);
            }}
          >
            <i className="lni lni-pencil mx-1" data-tip="Edit Document"></i>
          </a>
        </p>
      ),
    },
  ];

  return (
    <>
      {documentLoader ? (
        <div className="search-more" style={{ marginTop: '10px' }}>
          <BubbleLoader />
        </div>
      ) : (
        docList?.length > 0 ? (
          <div className="table-responsive dataTable-style react-table">
            <ReactTable
              columns={documentColumn}
              componentType={SETTINGS_COMPONENT_TYPE.MANAGE_KNOWLEDGE_DOCUMENT}
              data={docList}
              isDelete={true}
              folderId={folderId}
              getFoldersList={getDocList}
              defaultSorted={[
                {
                  id: "title",
                  desc: false
                }
              ]}
            />
          </div>
        ) : (
          <NodataFound />
        )
      )}
    </>
  );
};

export default DocumentList;
