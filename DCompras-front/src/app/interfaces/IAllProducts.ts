export interface IAllProducts {
  _type: string;
  total: number;
  offset: number;
  page_size: number;
  items: [
    {
      _type: string;
      id: string;
      object_type: string;
      sticky: boolean;
      title: string;
      default_click_url: string;
      display_info: string;
      tile_url: string;
      pages: [
        {
          _type: string;
          url: string;
          click_url: string;
          object_id: number;
          display_info: {
            _type: string;
            title: string;
            start_valid: number;
            end_valid: number /* 
           start_valid_date:2024-02-23,
           end_valid_date:2024-02-29, 
           validity_period: null,*/;
            store_info: {
              _type: string;
              id: number;
              name: string;
              url: string;
              logo_url: string;
            };
            click_out_url: string;
          };
        }
      ];
    }
  ];
}
