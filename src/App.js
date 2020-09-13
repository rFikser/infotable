import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { Loader } from './loader/Loader';
import { Table } from './components/Table/Table';
import _ from 'lodash';
import { DetailsCard } from './components/DetailsCard/DetailsCard';
import { Search } from './components/Search/Search';
import { UrlSelection } from './components/UrlSelection/UrlSelection';
import { AddRowModal } from './components/AddRowModal/AddRowModal';

class App extends Component {

    state = {
        isUrlSelected: false,
        isLoading: false,
        data: [],
        sort: 'asc',
        sortField: 'id',
        row: null,
        currentPage: 0,
        search: '',
        isOpen: false,
    }

    onSort = (sortField) => {
        const newData = this.state.data.concat()
        const sort = this.state.sort === 'asc' ? 'desc' : 'asc';
        const data = _.orderBy(newData, sortField, sort)
        this.setState({
            data, sort, sortField
        })
    };

    onSelect = (row) => {
        this.setState({ row })
    };

    onUrlSelect = (url) => {
        this.setState({
            isUrlSelected: true,
            isLoading: true,
        })
        this.loadData(url)
    };

    async loadData(url) {
        const response = await fetch(url);
        const data = await response.json();

        this.setState({
            isLoading: false,
            data: _.orderBy(data, this.state.sortField, this.state.sort)
        })
    }

    pageChange = ({ selected }) => {
        this.setState({ currentPage: selected })
    }

    handleSearch = (search) => {
        this.setState({ search, currentPage: 0 })
    }

    getFilteredData() {
        const { data, search } = this.state;

        if (!search) {
            return data
        }

        return data.filter(item => {
            return item['firstName'].toLowerCase().includes(search.toLowerCase())
                || item['lastName'].toLowerCase().includes(search.toLowerCase())
                || item['email'].toLowerCase().includes(search.toLowerCase())
                || item['phone'].includes(search)
        })
    }

    openModal = () => {
        this.setState({
            isOpen: true,
        })
    }

    closeModal = () => {
        this.setState({
            isOpen: false
        })
    }

    addRow = (contact) => {
        let newData = this.state.data;
        newData.unshift(contact)
        this.setState({
            data: newData,
            isOpen: false,
        })
        console.log(this.state.data);
    }



    render() {
        const pageSize = 50;
        const filteredData = this.getFilteredData();
        const pageCount = Math.ceil(filteredData.length / pageSize)
        const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage];
        if (!this.state.isUrlSelected) {
            return (
                <div className='container'>
                    <UrlSelection onUrlSelect={this.onUrlSelect} />
                </div>
            )
        }


        return (
            <div>
                {
                    this.state.isLoading
                        ? <Loader />
                        : <div>
                            <nav className='navbar bg-primary navbar-dark'>
                                <a className='navbar-brand' href='#'>Information Table</a>
                                <button onClick={this.openModal} className='btn btn-outline-dark'>Добавить</button>
                                <Search handleSearch={this.handleSearch} />
                            </nav>
                            <div className="container" >
                                <Table
                                    data={displayData}
                                    onSort={this.onSort}
                                    sort={this.state.sort}
                                    sortField={this.state.sortField}
                                    onSelect={this.onSelect}
                                />
                            </div>
                        </div>
                }
                {
                    this.state.isOpen ? <AddRowModal isOpen={this.state.isOpen} closeModal={this.closeModal} addRow={this.addRow} /> : null
                }
                {
                    this.state.data.length > pageSize
                        ? <ReactPaginate
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            forcePage={this.state.currentPage}
                            onPageChange={this.pageChange}
                            containerClassName={'pagination justify-content-center'}
                            activeClassName={'active'}
                            pageClassName='page-item'
                            pageLinkClassName='page-link'
                            previousClassName='page-item'
                            nextClassName='page-item'
                            previousLinkClassName='page-link'
                            nextLinkClassName='page-link'
                        />
                        : null
                }

                {
                    this.state.row ? <DetailsCard details={this.state.row} /> : null
                }
            </div>
        );
    }
}

export default App;