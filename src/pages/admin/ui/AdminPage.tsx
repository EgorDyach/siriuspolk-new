'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@shared/ui/Tabs';
import CheckedPersons from '@widgets/checkedPersons/ui/CheckedPersons';
import Medals from '@widgets/medals/ui/Medals';
import UncheckedPersons from '@widgets/uncheckedPersons/ui/UncheckedPersons';
import GalleryControls from '@widgets/galleryControls/ui/GalleryControls';
import { useAdminStore } from '@entities/admin/model/store';
import { showErrorNotification } from '@shared/lib/utils/notification';
import { sortMedals } from '@widgets/medals/model/helpers';
import React, { useEffect } from 'react';
import { requestMedals } from '@entities/medal/api/medals';
import { requestUncheckedPersons } from '@widgets/uncheckedPersons/api/uncheckedPersons';
import { requestCheckedPersons } from '@widgets/checkedPersons/api/checkedPersons';
import { requestPhotos } from '@entities/photo/api/photos';

const AdminPage = () => {
  const {
    uncheckedPersons,
    isLoading,
    setMedals,
    setIsLoading,
    setUncheckedPersons,
    setCheckedPersons,
    setPhotos,
  } = useAdminStore();
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const medals = await requestMedals();
        setMedals(sortMedals(medals));
        const UncheckedPersons = await requestUncheckedPersons();
        setUncheckedPersons(UncheckedPersons);
        const checkedPersons = await requestCheckedPersons();
        setCheckedPersons(checkedPersons);
        const galleryPhotos = await requestPhotos();
        setPhotos(galleryPhotos);
      } catch {
        showErrorNotification('Не удалось получить данные. Попробуйте позже.');
        setMedals([]);
        setUncheckedPersons([]);
        setCheckedPersons([]);
        setPhotos([]);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [
    setCheckedPersons,
    setIsLoading,
    setMedals,
    setPhotos,
    setUncheckedPersons,
  ]);
  return (
    <div className="py-10 sm:py-16">
      <div className="container">
        {isLoading && <div className="w-full text-center">Загрузка...</div>}
        {!isLoading && (
          <Tabs defaultValue="unchecked">
            <TabsList>
              <TabsTrigger value="unchecked">
                Непросмотренные{' '}
                {!!uncheckedPersons && (
                  <span className="relative size-8 flex justify-center items-center">
                    <span className="absolute inset-0 rounded-full bg-red-500 aspect-square" />
                    <span className="z-10 text-white relative">
                      {uncheckedPersons.length > 99
                        ? '99+'
                        : uncheckedPersons.length}
                    </span>
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="checked">Просмотренные</TabsTrigger>
              <TabsTrigger value="medals">Медали</TabsTrigger>
              <TabsTrigger value="gallery">Галерея</TabsTrigger>
            </TabsList>
            <TabsContent value="unchecked">
              <UncheckedPersons />
            </TabsContent>
            <TabsContent value="checked">
              <CheckedPersons />
            </TabsContent>
            <TabsContent value="medals">
              <Medals />
            </TabsContent>
            <TabsContent value="gallery">
              <GalleryControls />
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
